'use strict';
module.exports = {
    up  : (queryInterface, Sequelize) => {
        return queryInterface.createTable('markups', {
            id                 : {
                allowNull    : false,
                autoIncrement: true,
                primaryKey   : true,
                type         : Sequelize.INTEGER
            }, flight_type     : {
                type: Sequelize.INTEGER
            }, from_city       : {
                type: Sequelize.STRING
            }, to_city         : {
                type: Sequelize.STRING
            }, plating_carrier : {
                type: Sequelize.STRING
            }, travel_date_from: {
                type: Sequelize.DATE
            }, travel_date_to  : {
                type: Sequelize.DATE
            }, issue_date_from : {
                type: Sequelize.DATE
            }, issue_date_to   : {
                type: Sequelize.DATE
            }, user_group_id   : {
                type: Sequelize.INTEGER
            }, user_id         : {
                type: Sequelize.INTEGER
            }, api_source_id   : {
                type: Sequelize.INTEGER
            }, markup_value    : {
                type: Sequelize.DOUBLE
            }, max_amount      : {
                type: Sequelize.DOUBLE
            }, status_id       : {
                type        : Sequelize.INTEGER,
                allowNull   : false,
                defaultValue: 3
            },
            createdAt: {
                allowNull: false,
                type     : Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type     : Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('markups');
    }
};