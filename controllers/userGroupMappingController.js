const UserGroupMapping       = require('../models').user_group_mapping;
const moment                 = require("moment");
const {QueryTypes}           = require('sequelize');
const {sequelize, Sequelize} = require('../models/index');

exports.index = async (req, res) => {
    try {
        const user_group_mapping = await UserGroupMapping.findAll(
            {
                attributes : ["id", "group_id", "user_id"],
                
                order : [['id', 'DESC']], limit : 10
            }
        );
        if (!user_group_mapping) return res.status(400).json({msg : 'Something else!'});
        
        return res.status(200).json(user_group_mapping);
    } catch (err) {
        return res.status(500).json({msg : 'Server Error!'});
    }
};

exports.store = async (req, res) => {
    try {
        const {
                  group_id,
                  user_id,
              } = req.body;
        
        const newUserGroup = {
            group_id  : group_id,
            user_id   : user_id,
            createdAt : moment()
        };
        const status       = await UserGroupMapping.create(newUserGroup);
        if (!status) return res.status(400).json({msg : 'Please try again with full information!'});
        
        return res.status(200).json({msg : 'New User Group saved successfully.'});
    } catch (err) {
        return res.status(500).json({msg : 'Server Error!'});
    }
};

exports.edit = async (req, res) => {
    try {
        const group_id        = req.params.id;
        const user_group_data = await sequelize.query(
            'select u.id,ugm.group_id,ugm.user_id,u.name,u.email,u.mobile from users as u right join (select * from user_group_mappings where group_id = :group_id) as ugm on u.id = ugm.user_id',
            {
                replacements : {group_id : group_id},
                type         : QueryTypes.SELECT
            }
        );
        return res.status(200).json(user_group_data);
    } catch (err) {
        return res.status(500).json({msg : 'Server Errors!'});
    }
};

exports.assignedUsers = async (req, res) => {
    try {
        const group_id        = req.params.id;
        const user_group_data = await sequelize.query(
            'select * from users where id in (select user_id from user_group_mappings where group_id = :group_id);',
            {
                replacements : {group_id : group_id},
                type         : QueryTypes.SELECT
            }
        );
        return res.status(200).json(user_group_data);
    } catch (err) {
        return res.status(500).json({msg : 'Server Errors!'});
    }
};

exports.notAssignedUsers = async (req, res) => {
    try {
        const group_id        = req.params.id;
        const user_group_data = await sequelize.query(
            'select * from users where id not in (select user_id from user_group_mappings where group_id = :group_id);',
            {
                replacements : {group_id : group_id},
                type         : QueryTypes.SELECT
            }
        );
        return res.status(200).json(user_group_data);
    } catch (err) {
        return res.status(500).json({msg : 'Server Errors!'});
    }
};

exports.update = async (req, res) => {
    try {
        const {
                  id,
                  group_id,
                  user_id,
              } = req.body;
        
        const updateUserGroup = {
            id       : id,
            group_id : group_id,
            user_id  : user_id,
        };
        
        const status = await UserGroupMapping.findOne({where : {id}});
        if (!status) return res.status(400).json({msg : 'This UserGroupMapping not found!'});
        
        const user_group_mapping = await UserGroupMapping.update(updateUserGroup, {where : {id}});
        if (!user_group_mapping) return res.status(400).json({msg : 'Please try again with full information!'});
        
        return res.status(200).json({msg : 'UserGroupMapping Information updated successfully.'});
    } catch (err) {
        return res.status(500).json({msg : 'Server Error!'});
    }
};

exports.delete = async (req, res) => {
    try {
        const {id}   = req.body;
        const status = await UserGroupMapping.destroy({where : {id}});
        if (!status) return res.status(400).json({msg : 'Please try again!'});
        return res.status(200).json({msg : 'One UserGroupMapping deleted successfully!'});
    } catch (err) {
        return res.status(500).json({msg : 'Server Error!'});
    }
};
