'use strict';
module.exports = {
    up  : (queryInterface, Sequelize) => {
        return queryInterface.createTable('promotion_configurations', {
            id                  : {
                allowNull    : false,
                autoIncrement: true,
                primaryKey   : true,
                type         : Sequelize.INTEGER
            }, promotion_name   : {
                type     : Sequelize.STRING,
                allowNull: true,
            }, promotion_code   : {
                type     : Sequelize.STRING,
                allowNull: true,
            }, from_city_country: {
                type     : Sequelize.STRING,
                allowNull: true,
            }, from_city        : {
                type     : Sequelize.STRING,
                allowNull: true,
            }, to_city_country  : {
                type     : Sequelize.STRING,
                allowNull: true,
            }, to_city          : {
                type     : Sequelize.STRING,
                allowNull: true,
            }, flight_type      : {
                type     : Sequelize.STRING,
                allowNull: true,
            }, plating_carrier  : {
                type     : Sequelize.STRING,
                allowNull: true,
            }, issue_date_from  : {
                type     : Sequelize.DATEONLY,
                allowNull: true,
            }, issue_date_to    : {
                type     : Sequelize.DATEONLY,
                allowNull: true,
            }, travel_date_from : {
                type     : Sequelize.DATEONLY,
                allowNull: true,
            }, travel_date_to   : {
                type     : Sequelize.DATEONLY,
                allowNull: true,
            }, time_from        : {
                type     : Sequelize.TIME,
                allowNull: true,
            }, time_to          : {
                type     : Sequelize.TIME,
                allowNull: true,
            }, travel_class_id  : {
                type     : Sequelize.STRING,
                allowNull: true,
            }, booking_class    : {
                type     : Sequelize.STRING,
                allowNull: true,
            }, user_group_id    : {
                type     : Sequelize.STRING,
                allowNull: true,
            }, user_id          : {
                type     : Sequelize.STRING,
                allowNull: true,
            }, api_source_id    : {
                type     : Sequelize.INTEGER,
                allowNull: true,
            }, promo_type       : {
                type     : Sequelize.STRING,
                allowNull: true,
            }, value_type       : {
                type     : Sequelize.STRING,
                allowNull: true,
            }, value            : {
                type     : Sequelize.DOUBLE,
                allowNull: true,
            }, max_amount       : {
                type     : Sequelize.DOUBLE,
                allowNull: true,
            }, status_id        : {
                type        : Sequelize.INTEGER,
                allowNull   : false,
                defaultValue: 3,
                references  : {
                    model: 'status',
                    key  : 'id'
                }
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
        return queryInterface.dropTable('promotion_configurations');
    }
};