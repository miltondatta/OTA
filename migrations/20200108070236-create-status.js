'use strict';
module.exports = {
    up  : (queryInterface, Sequelize) => {
        return queryInterface.createTable('status', {
            id         : {
                allowNull    : false,
                autoIncrement: true,
                primaryKey   : true,
                type         : Sequelize.INTEGER
            },
            status_id  : {
                allowNull: false,
                type     : Sequelize.INTEGER
            },
            status_name: {
                allowNull: false,
                type     : Sequelize.STRING
            },
            createdAt  : {
                allowNull: true,
                type     : Sequelize.DATE
            },
            updatedAt  : {
                allowNull: true,
                type     : Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('status');
    }
};