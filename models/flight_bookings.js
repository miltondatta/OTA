'use strict';
module.exports = (sequelize, DataTypes) => {
    const flight_bookings     = sequelize.define('flight_bookings', {
        user_id             : DataTypes.INTEGER,
        reference           : DataTypes.STRING,
        pnr                 : DataTypes.TEXT,
        itenerary_amount    : DataTypes.BIGINT,
        markup              : DataTypes.BIGINT,
        markdown            : DataTypes.BIGINT,
        vat                 : DataTypes.BIGINT,
        voucher_id          : DataTypes.INTEGER,
        voucher_amount      : DataTypes.BIGINT,
        total_amount        : DataTypes.BIGINT,
        ticket_time_limit   : DataTypes.STRING,
        payment_status      : DataTypes.INTEGER,
        issue_ticket_status : DataTypes.INTEGER,
        void_ticket_status  : DataTypes.INTEGER,
        cacel_ticket_status : DataTypes.INTEGER,
        pnr_request_response: DataTypes.TEXT
    }, {});
    flight_bookings.associate = function (models) {
        // associations can be defined here
    };
    return flight_bookings;
};