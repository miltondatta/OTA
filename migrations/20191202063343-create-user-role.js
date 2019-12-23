'use strict';
module.exports = {
    up  : (queryInterface, Sequelize) => {
        return queryInterface.createTable('user_roles', {
            id       : {
                allowNull    : false,
                autoIncrement: true,
                primaryKey   : true,
                type         : Sequelize.INTEGER
            },
            role     : {
                type: Sequelize.STRING
            },
            role_eng : {
                type: Sequelize.STRING
            },
            user_type: {
                type: Sequelize.INTEGER
            },
            status   : {
                type: Sequelize.INTEGER
            },
            createdAt: {
                allowNull   : false,
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
        return queryInterface.dropTable('user_roles');
    }
};