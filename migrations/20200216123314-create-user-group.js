'use strict';
module.exports = {
    up   : (queryInterface, Sequelize) => {
        return queryInterface.createTable('user_groups', {
            id           : {
                allowNull     : false,
                autoIncrement : true,
                primaryKey    : true,
                type          : Sequelize.INTEGER
            },
            group_name   : {
                type : Sequelize.STRING
            },
            description  : {
                type : Sequelize.TEXT
            }, status_id : {
                type         : Sequelize.INTEGER,
                allowNull    : false,
                defaultValue : 3
            },
            createdAt    : {
                allowNull    : false,
                type         : Sequelize.DATE,
                defaultValue : Sequelize.NOW
            },
            updatedAt    : {
                allowNull    : false,
                type         : Sequelize.DATE,
                defaultValue : Sequelize.NOW
            }
        });
    },
    down : (queryInterface, Sequelize) => {
        return queryInterface.dropTable('user_groups');
    }
};