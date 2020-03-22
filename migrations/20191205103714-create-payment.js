'use strict';
module.exports = {
    up   : (queryInterface, Sequelize) => {
        return queryInterface.createTable('payments', {
            id                : {
                allowNull     : false,
                autoIncrement : true,
                primaryKey    : true,
                type          : Sequelize.INTEGER
            },
            flight_booking_id : {
                type : Sequelize.INTEGER,
            },
            transaction_id    : {
                type : Sequelize.STRING,
            },
            receivable_amount : {
                type : Sequelize.DOUBLE
            },
            payment_amount    : {
                type : Sequelize.DOUBLE
            },
            payment_option    : {
                type : Sequelize.STRING,
            },
            received_by : {
                type : Sequelize.INTEGER,
            },
            createdAt   : {
                allowNull : false,
                type      : Sequelize.DATE
            },
            updatedAt   : {
                allowNull : true,
                type      : Sequelize.DATE
            }
        });
    },
    down : (queryInterface, Sequelize) => {
        return queryInterface.dropTable('payments');
    }
};