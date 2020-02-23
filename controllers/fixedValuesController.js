const FixedValues = require('../models').fixed_values;
const moment      = require("moment");
const status      = require('../models').status;

exports.index = async (req, res) => {
    try {
        const fixed_val = await FixedValues.findAll(
            {
                attributes: ["id", "discount_name", "discount_code", "discount", "discount_unit",
                             "discount_type", "status_id"],
                include   : 'status',
                
                order: [['id', 'DESC']], limit: 10
            }
        );
        if (!fixed_val) return res.status(400).json({msg: 'Something else!'});
        
        return res.status(200).json(fixed_val);
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({msg: 'Server Error!'});
    }
};

exports.store = async (req, res) => {
    try {
        const {
                  discount_name,
                  discount_code,
                  discount,
                  discount_unit,
                  discount_type,
                  status_id
              } = req.body;
        
        const newFixed_values = {
            discount_name: discount_name,
            discount_code: discount_code,
            discount     : discount,
            discount_unit: discount_unit,
            discount_type: discount_type,
            status_id    : status_id,
        };
        const status          = await FixedValues.create(newFixed_values);
        if (!status) return res.status(400).json({msg: 'Please try again with full information!'});
        
        return res.status(200).json({msg: 'New Fixed Information saved successfully.'});
    } catch (err) {
        return res.status(500).json({msg: err.errors})
    }
};

exports.edit = async (req, res) => {
    try {
        const id                = req.params.id;
        const fixed_values_data = await FixedValues.findOne({
                                                                attributes: ["id", "discount_name", "discount_code", "discount", "discount_unit",
                                                                             "discount_type", "status_id"],
                                                                where     : {
                                                                    id: id
                                                                },
                                                                order     : [['id', 'DESC']]
                                                            }
        );
        return res.status(200).json(fixed_values_data);
        if (!fixed_values_data) return res.status(400).json({msg: 'Fixed Values information not found!'});
        
        return res.status(200).json(fixed_values_data);
    } catch (err) {
        console.error(err.message)
        return res.status(500).json({msg: 'Server Errors!'});
    }
};

exports.update = async (req, res) => {
    try {
        const {
                  id,
                  discount_name,
                  discount_code,
                  discount,
                  discount_unit,
                  discount_type,
                  status_id,
              } = req.body;
        
        const updateFixed_values = {
            id           : id,
            discount_name: discount_name,
            discount_code: discount_code,
            discount     : discount,
            discount_unit: discount_unit,
            discount_type: discount_type,
            status_id    : status_id,
        };
        
        const status = await FixedValues.findOne({where: {id}});
        if (!status) return res.status(400).json({msg: 'This Fixed Values not found!'});
        
        const fixed_val = await FixedValues.update(updateFixed_values, {where: {id}});
        if (!fixed_val) return res.status(400).json({msg: 'Please try again with full information!'});
        
        return res.status(200).json({msg: 'Fixed Values Information updated successfully.'});
    } catch (err) {
        return res.status(500).json({msg: 'Server Error!'});
    }
};

exports.delete = async (req, res) => {
    try {
        const {id}   = req.body;
        const status = await FixedValues.destroy({where: {id}});
        if (!status) return res.status(400).json({msg: 'Please try again!'});
        
        return res.status(200).json({msg: 'One Fixed Values deleted successfully!'});
    } catch (err) {
        return res.status(500).json({msg: 'Server Error!'});
    }
};
