'use strict';
module.exports = {
    up   : (queryInterface, Sequelize) => {
        return queryInterface.createTable('segments', {
            id                : {
                allowNull     : false,
                autoIncrement : true,
                primaryKey    : true,
                type          : Sequelize.INTEGER
            },
            flight_booking_id : {
                type         : Sequelize.INTEGER,
                allowNull    : true,
                defaultValue : null,
            },
            from              : {
                type         : Sequelize.STRING,
                allowNull    : true,
                defaultValue : null,
            },
            to                : {
                type         : Sequelize.STRING,
                allowNull    : true,
                defaultValue : null,
            },
            from_city         : {
                type         : Sequelize.STRING,
                allowNull    : true,
                defaultValue : null,
            },
            to_city           : {
                type         : Sequelize.STRING,
                allowNull    : true,
                defaultValue : null,
            },
            departure         : {
                type         : Sequelize.DATE,
                allowNull    : true,
                defaultValue : null,
            },
            arrival           : {
                type         : Sequelize.DATE,
                allowNull    : true,
                defaultValue : null,
            },
            airline           : {
                type         : Sequelize.STRING,
                allowNull    : true,
                defaultValue : null,
            },
            airline_name      : {
                type         : Sequelize.STRING,
                allowNull    : true,
                defaultValue : null,
            },
            flightNumber      : {
                type         : Sequelize.STRING,
                allowNull    : true,
                defaultValue : null,
            },
            duration          : {
                type         : Sequelize.STRING,
                allowNull    : true,
                defaultValue : null,
            },
            total_duration    : {
                type         : Sequelize.STRING,
                allowNull    : true,
                defaultValue : null,
            },
            bookingClass      : {
                type         : Sequelize.STRING,
                allowNull    : true,
                defaultValue : null,
            },
            baggage           : {
                type         : Sequelize.STRING,
                allowNull    : true,
                defaultValue : null,
            },
            createdAt         : {
                allowNull : false,
                type      : Sequelize.DATE,
            },
            updatedAt         : {
                allowNull : false,
                type      : Sequelize.DATE,
            }
        });
    },
    down : (queryInterface, Sequelize) => {
        return queryInterface.dropTable('segments');
    }
};