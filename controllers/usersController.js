const {sequelize, Sequelize} = require('../models/index');
const user = require('../models').user;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.store = async (req, res) => {
    const {name, email, password, mobile} = req.body;

    user.findOne({where: {email}}).then(results => {
        if (results) {
            return res.status(400).json({msg: 'Email already exist!'});
        } else {
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(password, salt, (err, hash) => {
                    user.create({name: name, email: email, password: hash, mobile: mobile}).then(results => {
                        return res.status(200).json({msg: 'User created successfully!'});
                    });
                });
            });
        }
    });

//

    /*
    user.findAll({}).then((data) => {
        console.log(data);
    }).catch((err) => {
        console.log(err);
    }); */

    /*
    sequelize.query('SELECT * FROM users').then(([results, metadata]) => {

        console.log(results);
        return results;
    }); */

};

exports.updateProfile = async (req, res) => {
    try {
        const {name, email, mobile} = req.body;
        const updated_data = {
            name: name,
            mobile: mobile
        };

        const status = await user.findOne({where: {email}});
        if (!status) res.status(400).json({msg: 'User not matched!'});

        const update = await user.update(updated_data, {where: {email}});
        if (!update) res.status(400).json({msg: 'Please try again!'});

        const updated_user = await user.findOne({where: {email}});
        const payload = {
            id: updated_user.id,
            name: updated_user.name,
            email: updated_user.email,
            mobile: updated_user.mobile
        };

        jwt.sign(payload,
            'secret',
            {expiresIn: 3600},
            (err, token) => {
                if (err) throw err;
                return res.status(200).json({
                    success: true,
                    token: 'ptm' + token
                });
            }
        );
    } catch (err) {
        console.error(err.message);
        res.status(500).json({msg: "Server Error!"});
    }
};

exports.updatePassword = async (req, res) => {
    try {
        const {email, password, newPassword} = req.body;

        const status = await user.findOne({where: {email}});
        if (!status) res.status(400).json({msg: 'User not matched!'});

        const isMatch = await bcrypt.compare(password, status.password);
        if (!isMatch) res.status(400).json({msg: 'Current Password not matched!'});

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(newPassword, salt);

        const updated_data = {
            password: hashPassword
        };

        const update = await user.update(updated_data, {where: {email}});
        if (!update) res.status(400).json({msg: 'Please try again!'});

        return res.status(200).json({msg: "Password Updated Successfully!"});
    } catch (err) {
        console.error(err.message);
        res.status(500).json({msg: "Server Error!"});
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
                const payload = {id: user.id, name: user.name, email: user.email, mobile: user.mobile};
                jwt.sign(
                    payload,
                    'secret', {expiresIn: 3600},
                    (err, token) => {
                        res.json({
                            success: true,
                            token: 'ptm' + token
                        });
                    });
            } else {
                return res.status(400).json({msg: 'Your password is incorrect!'});
            }
        });
    });
};