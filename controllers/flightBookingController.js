const flightBooking   = require('../models').flight_bookings;
const flightPassenger = require('../models').flight_passenger;
const segments        = require('../models').segments;
const payment_model   = require('../models').payment;
const {Sequelize}     = require('../models/index');
const moment          = require("moment");
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
        
        const payment_values        = {
            flight_booking_id : id,
            transaction_id    : "TRAN-" + Math.random().toString(36).substring(2).toUpperCase(),
            receivable_amount : total_amount,
            payment_amount    : receive_amount,
            payment_option    : 'CASH',
            received_by       : 1,
        };
        const payment_insert_status = await payment_model.create(payment_values);
        
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

exports.search = async (req, res) => {
    
    let obj = [];
    try {
        let search_param = req.body;
        obj.push({'status_id' : {[Op.ne] : -1}});/*Filter deleted Flight*/
        Object.keys(search_param).forEach((item, index) => {
            if (search_param[item]) {
                if (item === ("payment_status")) {
                    obj.push({[item] : {[Op.eq] : search_param[item]}});
                }
                if (item === ("issue_ticket_status")) {
                    obj.push({[item] : {[Op.eq] : search_param[item]}});
                }
                if (item === ("pnr")) {
                    obj.push({[item] : {[Op.like] : "%" + search_param[item] + "%"}});
                }
                if (item === ("invoice_id")) {
                    obj.push({[item] : {[Op.like] : "%" + search_param[item] + "%"}});
                }
                if (item === ("booking_date")) {
                    let booking_date    = moment(search_param[item]).format('YYYY-MM-DD 00:00:00 +00:00');
                    let booking_date_to = moment(search_param[item]).format('YYYY-MM-DD 23:59:59 +00:00');
                    obj.push({"createdAt" : {[Op.between] : [booking_date, booking_date_to]}});
                }
                if (item === ("s_flight_date")) {
                    let flight_date    = moment(search_param[item]).format('YYYY-MM-DD 00:00:00 +00:00');
                    let flight_date_to = moment(search_param[item]).format('YYYY-MM-DD 23:59:59 +00:00');
                    obj.push({"first_departure" : {[Op.between] : [flight_date, flight_date_to]}});
                }
            }
        });
        
        const data_list = await flightBooking.findAll(
            {
                where : {
                    [Op.and] : [
                        ...obj
                    ]
                },
                order : [['id', 'DESC']]
            }
        );
        return res.status(200).json(data_list);
        
    } catch (err) {
        return res.status(500).json({msg : 'Server Error!'});
    }
};