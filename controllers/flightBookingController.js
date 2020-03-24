const flightBooking   = require('../models').flight_bookings;
const flightPassenger = require('../models').flight_passenger;
const segments        = require('../models').segments;
const {Sequelize}     = require('../models/index');
const Op              = Sequelize.Op;
exports.index         = async (req, res) => {
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

exports.cashReceive = async (req, res) => {
    try {
        let payment_stat  = 7;
        let ticket_status = 5;
        
        const {id, receive_amount, total_amount, paid_amount} = req.body;
        if (total_amount <= receive_amount + paid_amount) {
            payment_stat  = 9;
            ticket_status = 6;
        } else {
            payment_stat = 8;
        }
        const status = await flightBooking.update(
            {
                paid_amount         : Sequelize.literal('paid_amount + ' + +receive_amount),
                payment_status      : payment_stat,
                issue_ticket_status : ticket_status
            },
            {where : {id : id}});
        if (!status) return res.status(400).json({msg : 'Please try again!'});
        
        return res.status(200).json({msg : 'One Booking has been deleted successfully!'});
    } catch (err) {
        return res.status(500).json({msg : err});
    }
};

exports.flightDetails = async (req, res) => {
    try {
        const id           = req.params.id;
        data_list          = {
            booking_data   : null,
            segment_data   : null,
            passenger_data : null,
        };
        const booking_data = await flightBooking.findOne({where : {id : id}});
        
        if (booking_data) data_list.booking_data = booking_data;
        
        const passenger_data = await flightPassenger.findAll(
            {
                where : {
                    booking_id : id
                }
            }
        );
        
        if (passenger_data) data_list.passenger_data = passenger_data;
        
        const segment_data = await segments.findAll(
            {
                where : {
                    flight_booking_id : id
                }
            }
        );
        
        if (segment_data) data_list.segment_data = segment_data;
        if (!data_list) return res.status(400).json({msg : 'Something else!'});
        
        return res.status(200).json(data_list);
    } catch (err) {
        return res.status(500).json({msg : 'Server Error!'});
    }
};