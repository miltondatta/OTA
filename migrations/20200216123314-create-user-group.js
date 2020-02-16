'use strict';
module.exports = {
    up  : (queryInterface, Sequelize) => {
        return queryInterface.createTable('user_groups', {
            id          : {
                allowNull    : false,
                autoIncrement: true,
                primaryKey   : true,
                type         : Sequelize.INTEGER
            },
            group_name  : {
                type: Sequelize.STRING
            },
            description : {
                type: Sequelize.TEXT
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
        return queryInterface.dropTable('user_groups');
    }
};