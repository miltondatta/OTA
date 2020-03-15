'use strict';
module.exports = (sequelize, DataTypes) => {
    const segments     = sequelize.define('segments', {
        flight_booking_id : DataTypes.INTEGER,
        from              : DataTypes.STRING,
        to                : DataTypes.STRING,
        from_city         : DataTypes.STRING,
        to_city           : DataTypes.STRING,
        departure         : DataTypes.DATE,
        arrival           : DataTypes.DATE,
        airline           : DataTypes.STRING,
        airline_name      : DataTypes.STRING,
        flightNumber      : DataTypes.STRING,
        duration          : DataTypes.STRING,
        total_duration    : DataTypes.STRING,
        bookingClass      : DataTypes.STRING,
        baggage           : DataTypes.STRING,
        createdAt         : DataTypes.DATE,
        updatedAt         : DataTypes.DATE,
    }, {});
    segments.associate = function (models) {
        // associations can be defined here
    };
    return segments;
};