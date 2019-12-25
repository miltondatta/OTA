'use strict';
module.exports = {
    up  : (queryInterface, Sequelize) => {
        return queryInterface.createTable('transaction_types', {
            id       : {
                allowNull    : false,
                autoIncrement: true,
                primaryKey   : true,
                type         : Sequelize.INTEGER
            },
            code     : {
                type: Sequelize.STRING
            },
            name     : {
                type: Sequelize.STRING
            },
            status   : {
                type     : Sequelize.INTEGER,
                allowNull: true,
            },
            createdAt: {
                allowNull   : true,
                type        : Sequelize.DATE,
                defaultValue: Sequelize.NOW
            },
            updatedAt: {
                allowNull   : true,
                type        : Sequelize.DATE,
                defaultValue: Sequelize.NOW
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('transaction_types');
    }
};