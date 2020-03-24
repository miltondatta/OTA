'use strict';
module.exports = (sequelize, DataTypes) => {
    const flight_bookings     = sequelize.define('flight_bookings', {
        user_id              : DataTypes.INTEGER,
        pnr                  : DataTypes.STRING,
        voucher_id           : DataTypes.INTEGER,
        voucher_amount       : DataTypes.DOUBLE,
        api_source           : DataTypes.INTEGER,
        is_promo_applied     : DataTypes.INTEGER,
        promo_id             : DataTypes.STRING,
        currency             : DataTypes.STRING,
        totalPrice           : DataTypes.DOUBLE,
        basePrice            : DataTypes.DOUBLE,
        execTotalPrice       : DataTypes.DOUBLE,
        execBasePrice        : DataTypes.DOUBLE,
        actualTotalPrice     : DataTypes.DOUBLE,
        actualBasePrice      : DataTypes.DOUBLE,
        taxes                : DataTypes.DOUBLE,
        airlines_fare        : DataTypes.DOUBLE,
        airlines_payment     : DataTypes.DOUBLE,
        ait_amount           : DataTypes.DOUBLE,
        fxd_amount           : DataTypes.DOUBLE,
        promo_amount         : DataTypes.DOUBLE,
        promo_amount_desc    : DataTypes.STRING,
        from                 : DataTypes.STRING,
        to                   : DataTypes.STRING,
        from_city            : DataTypes.STRING,
        to_city              : DataTypes.STRING,
        platingCarrier       : DataTypes.STRING,
        platingCarrier_name  : DataTypes.STRING,
        first_departure      : DataTypes.DATE,
        last_arrival         : DataTypes.DATE,
        same_day_arrival     : DataTypes.BOOLEAN,
        total_duration       : DataTypes.STRING,
        stoppage             : DataTypes.STRING,
        ticket_time_limit    : DataTypes.STRING,
        payment_status       : DataTypes.INTEGER,
        paid_amount          : DataTypes.DOUBLE,
        invoice_id           : DataTypes.STRING,
        issue_ticket_status  : DataTypes.INTEGER,
        void_ticket_status   : DataTypes.INTEGER,
        cancel_ticket_status : DataTypes.INTEGER,
        pnr_request_response : DataTypes.TEXT,
        status_id            : DataTypes.INTEGER,
        createdAt            : DataTypes.DATE,
        updatedAt            : DataTypes.DATE,
        
    }, {});
    flight_bookings.associate = function (models) {
        // associations can be defined here
    };
    return flight_bookings;
};