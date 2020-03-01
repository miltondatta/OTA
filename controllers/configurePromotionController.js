const configPromo = require('../models').promotion_configurations;
const moment      = require("moment");
const status      = require('../models').status;

const validatePromotionConfigurationInput = require('../validator/promotionConfiguration');

exports.index = async (req, res) => {
    try {
        const data_list = await configPromo.findAll(
            {
                attributes: ["id", "promotion_name", "promotion_code", "from_city", "to_city", "flight_type", "plating_carrier",
                             "issue_date_from",
                             "issue_date_to", "travel_date_from", "travel_date_to", "time_from", "time_to", "travel_class_id", "booking_class",
                             "user_group_id", "user_id", "api_source_id", "promo_type", "value_type", "value", "max_amount", "status_id",
                ],
                include   : 'status',
                
                order: [['id', 'DESC']], limit: 10
            }
        );
        if (!data_list) return res.status(400).json({msg: 'Something else!'});
        
        return res.status(200).json(data_list);
    } catch (err) {
        return res.status(500).json({msg: 'Server Error!'});
    }
};

exports.store = async (req, res) => {
    
    const {errors, isValid} = validatePromotionConfigurationInput(req.body);
    
    // Check Validation
    if (!isValid) {
        return res.status(400).json({errors, isValid});
    }
    
    try {
        const {
                  promotion_name,
                  promotion_code,
                  from_city_country,
                  from_city,
                  to_city_country,
                  to_city,
                  flight_type,
                  plating_carrier,
                  issue_date_from,
                  issue_date_to,
                  travel_date_from,
                  travel_date_to,
                  time_from,
                  time_to,
                  travel_class_id,
                  booking_class,
                  user_group_id,
                  user_id,
                  api_source_id,
                  promo_type,
                  value_type,
                  value,
                  max_amount,
                  status_id
              } = req.body;
        
        const new_data_list = {
            promotion_name   : promotion_name,
            promotion_code   : promotion_code,
            from_city_country: from_city_country,
            from_city        : from_city,
            to_city_country  : to_city_country,
            to_city          : to_city,
            flight_type      : flight_type,
            plating_carrier  : plating_carrier,
            issue_date_from  : (issue_date_from === '') ? null : issue_date_from,
            issue_date_to    : (issue_date_to === '') ? null : issue_date_to,
            travel_date_from : (travel_date_from === '') ? null : travel_date_from,
            travel_date_to   : (travel_date_to === '') ? null : travel_date_to,
            time_from        : (time_from === '') ? null : time_from,
            time_to          : (time_to === '') ? null : time_to,
            travel_class_id  : travel_class_id,
            booking_class    : booking_class,
            user_group_id    : user_group_id,
            user_id          : user_id,
            api_source_id    : (api_source_id === '') ? null : api_source_id,
            promo_type       : promo_type,
            value_type       : value_type,
            value            : value,
            max_amount       : (max_amount === '') ? null : max_amount,
            status_id        : status_id
        };
        const status        = await configPromo.create(new_data_list);
        
        if (!status) return res.status(400).json({msg: 'Please try again with full information!'});
        
        return res.status(200).json({msg: 'New Promotion condition saved successfully.'});
    } catch (err) {
        
        return res.status(500).json({msg: err.errors})
    }
};

exports.edit = async (req, res) => {
    try {
        const id        = req.params.id;
        const data_list = await configPromo.findOne({
                                                        attributes: ["id", "promotion_name", "promotion_code", "from_city_country", "from_city",
                                                                     "to_city_country", "to_city", "flight_type", "plating_carrier",
                                                                     "issue_date_from", "issue_date_to", "travel_date_from", "travel_date_to",
                                                                     "time_from", "time_to", "travel_class_id", "booking_class", "user_group_id",
                                                                     "user_id", "api_source_id", "promo_type", "value_type", "value",
                                                                     "max_amount", "status_id",
                                                        ],
                                                        where     : {
                                                            id: id
                                                        },
                                                        order     : [['id', 'DESC']]
                                                    }
        );
        return res.status(200).json(data_list);
        if (!data_list) return res.status(400).json({msg: 'Promotion condition information not found!'});
        
        return res.status(200).json(data_list);
    } catch (err) {
        return res.status(500).json({msg: 'Server Errors!'});
    }
};

exports.update = async (req, res) => {
    const {errors, isValid} = validatePromotionConfigurationInput(req.body);

    if (!isValid) {
        return res.status(400).json({errors, isValid});
    }
    
    try {
        const {
                  id,
                  promotion_name,
                  promotion_code,
                  from_city_country,
                  from_city,
                  to_city_country,
                  to_city,
                  flight_type,
                  plating_carrier,
                  issue_date_from,
                  issue_date_to,
                  travel_date_from,
                  travel_date_to,
                  time_from,
                  time_to,
                  travel_class_id,
                  booking_class,
                  user_group_id,
                  user_id,
                  api_source_id,
                  promo_type,
                  value_type,
                  value,
                  max_amount,
                  status_id
              } = req.body;
        
        const update_data_list = {
            id               : id,
            promotion_name   : promotion_name,
            promotion_code   : promotion_code,
            from_city_country: from_city_country,
            from_city        : from_city,
            to_city_country  : to_city_country,
            to_city          : to_city,
            flight_type      : flight_type,
            plating_carrier  : plating_carrier,
            issue_date_from  : (issue_date_from === '') ? null : issue_date_from,
            issue_date_to    : (issue_date_to === '') ? null : issue_date_to,
            travel_date_from : (travel_date_from === '') ? null : travel_date_from,
            travel_date_to   : (travel_date_to === '') ? null : travel_date_to,
            time_from        : (time_from === '') ? null : time_from,
            time_to          : (time_to === '') ? null : time_to,
            travel_class_id  : travel_class_id,
            booking_class    : booking_class,
            user_group_id    : user_group_id,
            user_id          : user_id,
            api_source_id    : (api_source_id === '') ? null : api_source_id,
            promo_type       : promo_type,
            value_type       : value_type,
            value            : value,
            max_amount       : (max_amount === '') ? null : max_amount,
            status_id        : status_id
        };
        console.log(update_data_list,192);
        const status = await configPromo.findOne({where: {id}});
        if (!status) return res.status(400).json({msg: 'This Api Sources not found!'});
        
        const update_status = await configPromo.update(update_data_list, {where: {id}});
        console.log(update_status,197);
        if (!update_status) return res.status(400).json({msg: 'Please try again with full information!'});
        
        return res.status(200).json({msg: 'Promotion condition updated successfully.'});
    } catch (err) {
        console.log(err,202);
        return res.status(500).json({msg: err.errors})
    }
};

exports.delete = async (req, res) => {
    try {
        const {id}   = req.body;
        const status = await configPromo.destroy({where: {id}});
        if (!status) return res.status(400).json({msg: 'Please try again!'});
        
        return res.status(200).json({msg: 'One Promotion condition deleted successfully!'});
    } catch (err) {
        return res.status(500).json({msg: 'Server Error!'});
    }
};