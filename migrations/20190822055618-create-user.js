'use strict';
module.exports = {
    up  : (queryInterface, Sequelize) => {
        return queryInterface.createTable('users', {
            id                : {
                allowNull    : false,
                autoIncrement: true,
                primaryKey   : true,
                type         : Sequelize.INTEGER
            },
            role_id: {
                type: Sequelize.INTEGER,
                defaultValue: 0
            },
            name              : {
                type: Sequelize.STRING
            },
            email             : {
                type: Sequelize.STRING
            },
            password          : {
                type: Sequelize.STRING
            },
            mobile            : {
                type: Sequelize.STRING
            },
            balance: {
                type: Sequelize.DOUBLE,
                defaultValue: 0
            },
            credit_limit: {
                type: Sequelize.DOUBLE,
                defaultValue: 0
            },
            verification_token: {
                allowNull: true,
                defaultValue: null,
                type     : Sequelize.STRING
            },
            token_sent_at         : {
                allowNull: true,
                type     : Sequelize.DATE
            },
            is_verified       : {
                allowNull: true,
                defaultValue: 0,
                type     : Sequelize.INTEGER
            },
            createdAt         : {
                allowNull: false,
                type     : Sequelize.DATE
            },
            updatedAt         : {
                allowNull: false,
                type     : Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('users');
    }
};


