const {sequelize, Sequelize} = require('../models/index');
const user                   = require('../models').user;
const user_role              = require('../models').user_role;
const Op                     = Sequelize.Op;
const bcrypt                 = require('bcryptjs');
const jwt                    = require('jsonwebtoken');
const nodemailer             = require('nodemailer');
const dotenv                 = require('dotenv');
dotenv.config();
const uuidv1   = require('uuid/v1');
var dateTime   = require('node-datetime');
const base_url = process.env.BASE_URL_CLIENT;
var moment     = require("moment");

exports.store = async (req, res) => {
    const {name, role_id, email, password, mobile} = req.body;
    
    user.findOne({where: {email}}).then(results => {
        if (results) {
            return res.status(400).json({msg: 'Email already exist!'});
        } else {
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(password, salt, (err, hash) => {
                    let uuid        = uuidv1();
                    let current_dt  = dateTime.create().format('Y-m-d H:M:S');
                    let confirm_url = base_url + 'verification/' + uuid;
                    user.create({
                                    name              : name,
                                    role_id           : role_id,
                                    email             : email,
                                    password          : hash,
                                    mobile            : mobile,
                                    verification_token: uuid,
                                    token_sent_at     : current_dt
                                }).then(results => {
                        let mail_host     = process.env.MAIL_HOST;
                        let mail_port     = process.env.MAIL_PORT;
                        let mail_user     = process.env.MAIL_USER;
                        let mail_password = process.env.MAIL_PASSWORD;
                        let mail_from     = process.env.MAIL_FROM;
                        
                        var transport = nodemailer.createTransport({
                                                                       host: mail_host,
                                                                       port: mail_port,
                                                                       auth: {
                                                                           user: mail_user,
                                                                           pass: mail_password
                                                                       }
                                                                   });
                        const message = {
                                  from   : mail_from,
                                  to     : email,
                                  subject: 'Confirm Registration Email',
                                  html   : "<h1>Hi," + name + "</h1><br/><p>Here is your Email verification link.</p><br/><a href="
                                      + confirm_url + " target='_blank'>Click to Confirm</a>"
                              }
                        ;
                        transport.sendMail(message, function (err, info) {
                            if (err) {
                                console.log(err)
                            } else {
                                console.log(info);
                            }
                        });
                        return res.status(200).json({msg: 'An email sent to your mail. Please Confirm'});
                    });
                });
            });
        }
    });
    
};

exports.updateProfile = async (req, res) => {
    try {
        const {name, email, mobile} = req.body;
        const updated_data          = {
            name  : name,
            mobile: mobile
        };
        
        const status = await user.findOne({where: {email}});
        if (!status) res.status(400).json({profile_update_msg: 'User not matched!'});
        
        const update = await user.update(updated_data, {where: {email}});
        if (!update) res.status(400).json({profile_update_msg: 'Please try again!'});
        
        const updated_user = await user.findOne({where: {email}});
        const payload      = {
            id    : updated_user.id,
            name  : updated_user.name,
            email : updated_user.email,
            mobile: updated_user.mobile
        };
        
        jwt.sign(payload,
                 'secret',
                 {expiresIn: 3600},
                 (err, token) => {
                     if (err) throw err;
                     return res.status(200).json({
                                                     success: true,
                                                     token  : 'ptm' + token
                                                 });
                 }
        );
    } catch (err) {
        console.error(err.message);
        res.status(500).json({profile_update_msg: "Server Error!"});
    }
};

exports.updatePassword = async (req, res) => {
    try {
        const {email, password, newPassword} = req.body;
        
        const status = await user.findOne({where: {email}});
        if (!status) res.status(400).json({profile_update_msg: 'User not matched!'});
        
        const isMatch = await bcrypt.compare(password, status.password);
        if (!isMatch) res.status(400).json({profile_update_msg: 'Current Password not matched!'});
        
        const salt         = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(newPassword, salt);
        
        const updated_data = {
            password: hashPassword
        };
        
        const update = await user.update(updated_data, {where: {email}});
        if (!update) res.status(400).json({profile_update_msg: 'Please try again!'});
        
        return res.status(200).json({profile_update_msg: "Password Updated Successfully!"});
    } catch (err) {
        console.error(err.message);
        res.status(500).json({profile_update_msg: "Server Error!"});
    }
};

exports.login = async (req, res) => {
    const {email, password} = req.body;
    user.findOne({where: {email}}).then(user => {
        if (!user) {
            return res.status(400).json({msg: 'Email not found!'});
        }
        
        //Check password
        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
                if (user.is_verified) {
                    const payload = {id: user.id, role_id: user.role_id, name: user.name, email: user.email, mobile: user.mobile};
                    jwt.sign(
                        payload,
                        'secret', {expiresIn: 3600},
                        (err, token) => {
                            res.json({
                                         success: true,
                                         token  : 'ptm' + token
                                     });
                        });
                } else {
                    return res.status(400).json({msg: 'Email is not verified. Please Verify Your Email.', status: 0});
                }
            } else {
                return res.status(400).json({msg: 'Your password is incorrect!', status: 0});
            }
        });
    });
};

exports.confirm_by_email = async (req, res) => {
    let verification_token = req.body.token;
    user.findOne({where: {verification_token}}).then(results => {
        if (results) {
            let start_date = moment(results.token_sent_at);
            let end_date   = moment();
            let minutes    = parseInt(moment.duration(end_date.diff(start_date)).asMinutes());
            if (minutes > 600) {
                return res.status(400).json({msg: 'Session Expire'});
            } else {
                user.update({'is_verified': 1, 'verification_token': '', 'status': 3}, {where: {verification_token}});
                return res.status(200).json({msg: 'User Verified Successfully. Now You Can Login.', status: true});
            }
        } else {
            return res.status(200).json({msg: 'Token not Matched', status: false});
        }
    }).catch(err => {
        return res.status(200).json({msg: 'Token not Matched', status: false});
    })
};

exports.getRole = async (req, res) => {
    try {
        const {user_type} = req.body;
        
        const status = await user_role.findAll({
                                                   attributes: ["user_type", "role", "role_eng"],
                                                   where     : {user_type: {[Op.notIn]: user_type}, status: 1}
                                               });
        if (!status) res.status(400).json({msg: 'Please try again!'});
        
        return res.status(200).json(status);
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({msg: 'Server Error!'});
    }
};

exports.index = async (req, res) => {
    try {
        const users = await user.findAll(
            {
                attributes: ["id", "role_id", "name", "email", "mobile", "balance", "credit_limit",
                             "is_verified", "status", "createdAt", "updatedAt"],
                order     : [['id', 'DESC']],
                where     : {status: 3}
            }
        );
        if (!users) return res.status(400).json({msg: 'Something else!'});
        
        return res.status(200).json(users);
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({msg: 'Server Error!'});
    }
};

exports.delete = async (req, res) => {
    try {
        const {id} = req.body;
        
        const status = await user.update({'status': -999}, {where: {id}});
        if (!status) return res.status(400).json({msg: 'Please try again!'});
        
        return res.status(200).json({msg: 'User deleted successfully!'});
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({msg: 'Server Error!'});
    }
};

exports.edit = async (req, res) => {
    try {
        const id = req.params.id;
        
        const user_edit = await user.findOne({where: {id}});
        if (!user_edit) return res.status(400).json({msg: 'User information not found!'});
        
        return res.status(200).json(user_edit);
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({msg: 'Server Error!'});
    }
};

exports.update = async (req, res) => {
    try {
        const {id, name, mobile, credit_limit, status/*, role*/} = req.body;
        var db_status = status==true?3:4;
        const updateUser = {
            name        : name,
            mobile      : mobile,
            credit_limit: credit_limit,
            status      : db_status,
            /*role        : role,*/
            updatedAt   : moment(),
        };
        
        const cur_user = await user.findOne({where: {id}});
        if (!cur_user) return res.status(400).json({msg: 'User not found!'});
        
        const updated_user = await user.update(updateUser, {where: {id}});
        if (!updated_user) return res.status(400).json({msg: 'Please try again with full information!'});
        
        return res.status(200).json({msg: 'User Information updated successfully.'});
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({msg: 'Server Error!'});
    }
};

