'use strict';
module.exports = {
    up  : (queryInterface, Sequelize) => {
        return queryInterface.createTable('api_sources', {
            id          : {
                allowNull    : false,
                autoIncrement: true,
                primaryKey   : true,
                type         : Sequelize.INTEGER
            },
            api_code    : {
                type: Sequelize.STRING
            }, api_name : {
                type: Sequelize.STRING
            }, end_point: {
                type: Sequelize.STRING
            }, status_id: {
                type: Sequelize.INTEGER
            },
            createdAt   : {
                allowNull: false,
                type     : Sequelize.DATE
            },
            updatedAt   : {
                allowNull: false,
                type     : Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('api_sources');
    }
};