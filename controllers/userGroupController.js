const UserGroup = require('../models').user_group;
const moment    = require("moment");

exports.index = async (req, res) => {
    try {
        const user_group = await UserGroup.findAll(
            {
                attributes: ["id", "group_name", "description", "status_id",],
                
                order: [['id', 'DESC']], limit: 10
            }
        );
        if (!user_group) return res.status(400).json({msg: 'Something else!'});
        
        return res.status(200).json(user_group);
    } catch (err) {
        return res.status(500).json({msg: 'Server Error!'});
    }
};

exports.getUserGroupByCountry = async (req, res) => {
    const iso_country = req.body.iso_country;
    
    try {
        const user_group = await UserGroup.findAll({
                                                       attributes: ["id", "group_name", "description", "status_id",],
                                                       where     : {
                                                           iso_country: iso_country
                                                       },
                                                       order     : [['id', 'DESC']]
                                                   }
        );
        if (!user_group) return res.status(400).json({msg: 'Something else!'});
        
        return res.status(200).json(user_group);
    } catch (err) {
        return res.status(500).json({msg: 'Server Error!'});
    }
};

exports.store = async (req, res) => {
    try {
        const {
                  group_name,
                  description,
                  status_id,
              } = req.body;
        
        const newUserGroup = {
            group_name : group_name,
            description: description,
            status_id  : status_id,
            createdAt  : moment()
        };
        const status       = await UserGroup.create(newUserGroup);
        if (!status) return res.status(400).json({msg: 'Please try again with full information!'});
        
        return res.status(200).json({msg: 'New User Group saved successfully.'});
    } catch (err) {
        return res.status(500).json({msg: 'Server Error!'});
    }
};

exports.edit = async (req, res) => {
    try {
        const id              = req.params.id;
        const user_group_data = await UserGroup.findOne({
                                                            attributes: ["id", "group_name", "description", "status_id",],
                                                            where     : {
                                                                id: id
                                                            },
                                                            order     : [['id', 'DESC']]
                                                        }
        );
        return res.status(200).json(user_group_data);
    } catch (err) {
        return res.status(500).json({msg: 'Server Errors!'});
    }
};

exports.update = async (req, res) => {
    try {
        const {
                  id,
                  group_name,
                  description,
                  status_id,
              } = req.body;
        
        const updateUserGroup = {
            id         : id,
            group_name : group_name,
            description: description,
            status_id  : status_id,
        };
        
        const status = await UserGroup.findOne({where: {id}});
        if (!status) return res.status(400).json({msg: 'This UserGroup not found!'});
        
        const user_group = await UserGroup.update(updateUserGroup, {where: {id}});
        if (!user_group) return res.status(400).json({msg: 'Please try again with full information!'});
        
        return res.status(200).json({msg: 'UserGroup Information updated successfully.'});
    } catch (err) {
        return res.status(500).json({msg: 'Server Error!'});
    }
};

exports.delete = async (req, res) => {
    try {
        const {id}   = req.body;
        const status = await UserGroup.destroy({where: {id}});
        if (!status) return res.status(400).json({msg: 'Please try again!'});
        return res.status(200).json({msg: 'One UserGroup deleted successfully!'});
    } catch (err) {
        return res.status(500).json({msg: 'Server Error!'});
    }
};
