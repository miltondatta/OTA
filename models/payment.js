'use strict';
module.exports = (sequelize, DataTypes) => {
    const payment     = sequelize.define('payment', {
        flight_booking_id : DataTypes.INTEGER,
        transaction_id    : DataTypes.STRING,
        receivable_amount : DataTypes.DOUBLE,
        payment_amount    : DataTypes.DOUBLE,
        payment_option    : DataTypes.STRING,
        received_by       : DataTypes.INTEGER
    }, {});
    payment.associate = function (models) {
        // associations can be defined here
    };
    return payment;
};