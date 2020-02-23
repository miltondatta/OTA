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
            }, discount_unit: {
                type: Sequelize.ENUM('ps', 'fxd')
            }, discount_type: {
                type: Sequelize.ENUM('a', 'd')
            }, status_id    : {
                type        : Sequelize.INTEGER,
                allowNull   : false,
                defaultValue: 3,
                references  : {
                    model: 'status',
                    key  : 'id'
                }
            },
            createdAt       : {
                allowNull   : false,
                type        : Sequelize.DATE,
                defaultValue: new Date()
            },
            updatedAt       : {
                allowNull   : false,
                type        : Sequelize.DATE,
                defaultValue: new Date()
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        
        return queryInterface.sequelize.transaction(t => {
            return Promise.all([
                                   queryInterface.dropTable('fixed_values'),
                                   queryInterface.sequelize.query('DROP TYPE IF EXISTS "enum_fixed_values_discount_type";'),
                                   queryInterface.sequelize.query('DROP TYPE IF EXISTS "enum_fixed_values_discount_unit";'),
                               ]);
        });
    }
};