'use strict';
module.exports = {
    up  : (queryInterface, Sequelize) => {
        return queryInterface.createTable('promotion_configuration', {
            id                  : {
                allowNull    : false,
                autoIncrement: true,
                primaryKey   : true,
                type         : Sequelize.INTEGER
            }, promotion_name   : {
                type: Sequelize.STRING
            }, promotion_code   : {
                type: Sequelize.STRING
            }, from_city_country: {
                type: Sequelize.STRING
            }, from_city        : {
                type: Sequelize.STRING
            }, to_city          : {
                type: Sequelize.STRING
            }, to_city_country  : {
                type: Sequelize.STRING
            }, flight_type      : {
                type: Sequelize.STRING
            }, plating_carrier  : {
                type: Sequelize.STRING
            }, issue_date_from  : {
                type: Sequelize.DATE
            }, issue_date_to    : {
                type: Sequelize.DATE
            }, travel_date_from : {
                type: Sequelize.DATE
            }, travel_date_to   : {
                type: Sequelize.DATE
            }, time_from        : {
                type: Sequelize.TIME
            }, time_to          : {
                type: Sequelize.TIME
            }, travel_class_id  : {
                type: Sequelize.STRING
            }, booking_class    : {
                type: Sequelize.STRING
            }, user_group_id    : {
                type: Sequelize.INTEGER
            }, user_id          : {
                type: Sequelize.INTEGER
            }, api_source_id    : {
                type: Sequelize.INTEGER
            }, promo_type       : {
                type: Sequelize.STRING
            }, value_type       : {
                type: Sequelize.STRING
            }, value            : {
                type: Sequelize.DOUBLE
            }, max_amount       : {
                type: Sequelize.DOUBLE
            }, status_id        : {
                type        : Sequelize.INTEGER,
                allowNull   : false,
                defaultValue: 3
            },
            createdAt           : {
                allowNull: false,
                type     : Sequelize.DATE
            },
            updatedAt           : {
                allowNull: false,
                type     : Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('markups');
    }
};