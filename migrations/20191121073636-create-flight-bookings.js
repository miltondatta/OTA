'use strict';
module.exports = {
    up   : (queryInterface, Sequelize) => {
        return queryInterface.createTable('flight_bookings', {
            id                   : {
                allowNull     : false,
                autoIncrement : true,
                primaryKey    : true,
                type          : Sequelize.INTEGER
            },
            user_id              : {
                type : Sequelize.INTEGER,
            },
            pnr                  : {
                type         : Sequelize.STRING,
                allowNull    : true,
                defaultValue : null,
            },
            voucher_id           : {
                type         : Sequelize.INTEGER,
                allowNull    : true,
                defaultValue : null,
            },
            voucher_amount       : {
                allowNull    : true,
                defaultValue : null,
                type         : Sequelize.DOUBLE,
            },
            api_source           : {
                type         : Sequelize.INTEGER,
                allowNull    : true,
                defaultValue : null,
            },
            is_promo_applied     : {
                type         : Sequelize.INTEGER,
                allowNull    : true,
                defaultValue : null,
            },
            promo_id             : {
                type         : Sequelize.INTEGER,
                allowNull    : true,
                defaultValue : null,
            },
            currency             : {
                type         : Sequelize.STRING,
                allowNull    : true,
                defaultValue : null,
            },
            totalPrice           : {
                allowNull    : true,
                defaultValue : null,
                type         : Sequelize.DOUBLE,
            },
            basePrice            : {
                allowNull    : true,
                defaultValue : null,
                type         : Sequelize.DOUBLE,
            },
            execTotalPrice       : {
                allowNull    : true,
                defaultValue : null,
                type         : Sequelize.DOUBLE,
            },
            execBasePrice        : {
                allowNull    : true,
                defaultValue : null,
                type         : Sequelize.DOUBLE,
            },
            actualTotalPrice     : {
                allowNull    : true,
                defaultValue : null,
                type         : Sequelize.DOUBLE,
            },
            actualBasePrice      : {
                allowNull    : true,
                defaultValue : null,
                type         : Sequelize.DOUBLE,
            },
            taxes                : {
                allowNull    : true,
                defaultValue : null,
                type         : Sequelize.DOUBLE,
            },
            airlines_fare        : {
                allowNull    : true,
                defaultValue : null,
                type         : Sequelize.DOUBLE,
            },
            airlines_payment     : {
                allowNull    : true,
                defaultValue : null,
                type         : Sequelize.DOUBLE,
            },
            ait_amount           : {
                allowNull    : true,
                defaultValue : null,
                type         : Sequelize.DOUBLE,
            },
            fxd_amount           : {
                allowNull    : true,
                defaultValue : null,
                type         : Sequelize.DOUBLE,
            },
            promo_amount         : {
                allowNull    : true,
                defaultValue : null,
                type         : Sequelize.DOUBLE,
            },
            promo_fare_amount    : {
                allowNull    : true,
                defaultValue : null,
                type         : Sequelize.DOUBLE,
            },
            from                 : {
                type         : Sequelize.STRING,
                allowNull    : true,
                defaultValue : null,
            },
            to                   : {
                type         : Sequelize.STRING,
                allowNull    : true,
                defaultValue : null,
            },
            from_city            : {
                type         : Sequelize.STRING,
                allowNull    : true,
                defaultValue : null,
            },
            platingCarrier       : {
                type         : Sequelize.STRING,
                allowNull    : true,
                defaultValue : null,
            },
            platingCarrier_name  : {
                type         : Sequelize.STRING,
                allowNull    : true,
                defaultValue : null,
            },
            first_departure      : {
                type         : Sequelize.DATE,
                allowNull    : true,
                defaultValue : null,
            },
            last_arrival         : {
                type         : Sequelize.DATE,
                allowNull    : true,
                defaultValue : null,
            },
            same_day_arrival     : {
                type         : Sequelize.BOOLEAN,
                allowNull    : true,
                defaultValue : null,
            },
            total_duration       : {
                type         : Sequelize.STRING,
                allowNull    : true,
                defaultValue : null,
            },
            stoppage             : {
                type         : Sequelize.STRING,
                allowNull    : true,
                defaultValue : null,
            },
            ticket_time_limit    : {
                allowNull    : true,
                defaultValue : null,
                type         : Sequelize.STRING,
            },
            payment_status       : {
                allowNull    : true,
                defaultValue : null,
                type         : Sequelize.INTEGER,
            },
            invoice_id           : {
                allowNull    : true,
                defaultValue : null,
                type         : Sequelize.INTEGER,
            },
            issue_ticket_status  : {
                allowNull    : true,
                defaultValue : null,
                type         : Sequelize.INTEGER,
            },
            void_ticket_status   : {
                allowNull    : true,
                defaultValue : null,
                type         : Sequelize.INTEGER,
            },
            cancel_ticket_status : {
                allowNull    : true,
                defaultValue : null,
                type         : Sequelize.INTEGER,
            },
            pnr_request_response : {
                allowNull    : true,
                defaultValue : null,
                type         : Sequelize.TEXT,
            },
            createdAt            : {
                allowNull : false,
                type      : Sequelize.DATE,
            },
            updatedAt            : {
                allowNull : false,
                type      : Sequelize.DATE,
            }
        });
    },
    down : (queryInterface, Sequelize) => {
        return queryInterface.dropTable('flight_bookings');
    }
};