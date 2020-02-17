'use strict';
module.exports = {
    up  : (queryInterface, Sequelize) => {
        return queryInterface.createTable('fixed_values', {
            id              : {
                allowNull    : false,
                autoIncrement: true,
                primaryKey   : true,
                type         : Sequelize.INTEGER
            }, discount_name: {
                type: Sequelize.STRING
            }, discount_code: {
                type     : Sequelize.STRING,
                allowNull: false,
                unique   : true
            }, discount     : {
                type     : Sequelize.DOUBLE,
                allowNull: false,
                unique   : true
            }, discount_type: {
                type: Sequelize.ENUM('a', 'd')
            }, status_id    : {
                type        : Sequelize.INTEGER,
                allowNull   : false,
                defaultValue: 3
            },
            createdAt       : {
                allowNull: false,
                type     : Sequelize.DATE
            },
            updatedAt       : {
                allowNull: false,
                type     : Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('fixed_values');
    }
};