'use strict';
module.exports = (sequelize, DataTypes) => {
    const flight_passenger     = sequelize.define('flight_passenger', {
        booking_id          : DataTypes.INTEGER,
        first_name          : DataTypes.STRING,
        last_name           : DataTypes.STRING,
        nationality         : DataTypes.STRING,
        gender              : DataTypes.STRING,
        date_of_birth       : DataTypes.DATE,
        passport_number     : DataTypes.STRING,
        passport_expiry_date: DataTypes.DATE,
        passenger_type      : DataTypes.STRING
    }, {});
    flight_passenger.associate = function (models) {
        // associations can be defined here
    };
    return flight_passenger;
};