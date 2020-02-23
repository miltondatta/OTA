const ApiSources = require('../models').api_sources;
const moment     = require("moment");
const status     = require('../models').status;

exports.index = async (req, res) => {
    try {
        const data_list = await ApiSources.findAll(
            {
                attributes: ["id", "api_code", "api_name", "end_point", "status_id"],
                include   : 'status',
                
                order: [['id', 'DESC']], limit: 10
            }
        );
        if (!data_list) return res.status(400).json({msg: 'Something else!'});
        
        return res.status(200).json(data_list);
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({msg: 'Server Error!'});
    }
};

exports.store = async (req, res) => {
    try {
        const {
                  api_code,
                  api_name,
                  end_point,
                  status_id
              } = req.body;
        
        const new_data_list = {
            api_code : api_code,
            api_name : api_name,
            end_point: end_point,
            status_id: status_id,
        };
        const status        = await ApiSources.create(new_data_list);
        if (!status) return res.status(400).json({msg: 'Please try again with full information!'});
        
        return res.status(200).json({msg: 'New Api Source saved successfully.'});
    } catch (err) {
        return res.status(500).json({msg: err.errors})
    }
};

exports.edit = async (req, res) => {
    try {
        const id        = req.params.id;
        const data_list = await ApiSources.findOne({
                                                       attributes: ["id", "api_code", "api_name", "end_point", "status_id"],
                                                       where     : {
                                                           id: id
                                                       },
                                                       order     : [['id', 'DESC']]
                                                   }
        );
        return res.status(200).json(data_list);
        if (!data_list) return res.status(400).json({msg: 'Api Sources information not found!'});
        
        return res.status(200).json(data_list);
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({msg: 'Server Errors!'});
    }
};

exports.update = async (req, res) => {
    try {
        const {
                  id,
                  api_code,
                  api_name,
                  end_point,
                  status_id,
              } = req.body;
        
        const update_data_list = {
            id       : id,
            api_code : api_code,
            api_name : api_name,
            end_point: end_point,
            status_id: status_id,
        };
        
        const status = await ApiSources.findOne({where: {id}});
        if (!status) return res.status(400).json({msg: 'This Api Sources not found!'});
        
        const update_status = await ApiSources.update(update_data_list, {where: {id}});
        if (!update_status) return res.status(400).json({msg: 'Please try again with full information!'});
        
        return res.status(200).json({msg: 'Api Sources Information updated successfully.'});
    } catch (err) {
        return res.status(500).json({msg: 'Server Error!'});
    }
};

exports.delete = async (req, res) => {
    try {
        const {id}   = req.body;
        const status = await ApiSources.destroy({where: {id}});
        if (!status) return res.status(400).json({msg: 'Please try again!'});
        
        return res.status(200).json({msg: 'One Api Sources deleted successfully!'});
    } catch (err) {
        return res.status(500).json({msg: 'Server Error!'});
    }
};
