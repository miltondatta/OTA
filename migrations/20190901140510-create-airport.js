'use strict';
module.exports = {
    up  : (queryInterface, Sequelize) => {
        return queryInterface.createTable('airports', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            ident            : {
                type: Sequelize.STRING
            },
            type             : {
                type: Sequelize.STRING
            },
            name             : {
                type: Sequelize.STRING
            },
            latitude_deg     : {
                type: Sequelize.DOUBLE
            },
            longitude_deg    : {
                type: Sequelize.DOUBLE
            },
            elevation_ft     : {
                type: Sequelize.INTEGER
            },
            continent        : {
                type: Sequelize.STRING
            },
            iso_country      : {
                type: Sequelize.STRING
            },
            iso_region       : {
                type: Sequelize.STRING
            },
            municipality     : {
                type: Sequelize.STRING
            },
            scheduled_service: {
                type: Sequelize.INTEGER
            },
            gps_code         : {
                type: Sequelize.STRING
            },
            iata_code        : {
                type: Sequelize.STRING
            },
            local_code       : {
                type: Sequelize.STRING
            },
            home_link        : {
                type: Sequelize.STRING
            },
            wikipedia_link   : {
                type: Sequelize.STRING
            },
            keywords         : {
                type: Sequelize.STRING
            },
            score            : {
                type: Sequelize.INTEGER
            },
            last_updated     : {
                allowNull   : true,
                type        : Sequelize.DATE,
                defaultValue: Sequelize.NOW
            },
            createdAt        : {
                allowNull: true,
                type     : Sequelize.DATE
            },
            updatedAt        : {
                allowNull: true,
                type     : Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('airports');
    }
};