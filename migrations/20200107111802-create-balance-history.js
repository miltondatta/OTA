'use strict';
module.exports = {
    up  : (queryInterface, Sequelize) => {
        return queryInterface.createTable('balance_history', {
            id              : {
                allowNull    : false,
                autoIncrement: true,
                primaryKey   : true,
                type         : Sequelize.INTEGER
            },
            user_id         : {
                type: Sequelize.INTEGER
            },
            previous_balance: {
                type: Sequelize.DOUBLE
            },
            current_balance : {
                type: Sequelize.DOUBLE
            },
            trans_amount    : {
                type: Sequelize.DOUBLE
            },
            description     : {
                allowNull: true,
                type     : Sequelize.TEXT
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
        return queryInterface.dropTable('balance_history');
    }
};