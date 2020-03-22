const flightBooking = require('../models').flight_bookings;
const {Sequelize}   = require('../models/index');
const Op            = Sequelize.Op;
exports.index       = async (req, res) => {
    try {
        const data_list = await flightBooking.findAll(
            {
                where : {
                    status_id : {[Op.ne] : -1}
                },
                order : [['id', 'DESC']],
                limit : 20
            }
        );
        if (!data_list) return res.status(400).json({msg : 'Something else!'});
        
        return res.status(200).json(data_list);
    } catch (err) {
        return res.status(500).json({msg : 'Server Error!'});
    }
};

exports.delete = async (req, res) => {
    try {
        const {id}          = req.body;
        const delete_status = {
            id        : id,
            status_id : -1,
        };
        const status        = await flightBooking.findOne({where : {id}});
        const update_status = await flightBooking.update(delete_status, {where : {id}});
        if (!status) return res.status(400).json({msg : 'Please try again!'});
        
        return res.status(200).json({msg : 'One Booking has been deleted successfully!'});
    } catch (err) {
        return res.status(500).json({msg : 'Server Error!'});
    }
};