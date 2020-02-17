'use strict';
module.exports = (sequelize, DataTypes) => {
    const markup     = sequelize.define('markup', {
        flight_type     : DataTypes.STRING,
        from_city       : DataTypes.STRING,
        to_city         : DataTypes.STRING,
        plating_carrier : DataTypes.STRING,
        travel_date_from: DataTypes.DATE,
        travel_date_to  : DataTypes.DATE,
        issue_date_from : DataTypes.DATE,
        issue_date_to   : DataTypes.DATE,
        user_group_id   : DataTypes.INTEGER,
        user_id         : DataTypes.INTEGER,
        api_source_id   : DataTypes.INTEGER,
        markup_type     : DataTypes.INTEGER,
        markup_value    : DataTypes.INTEGER,
        max_amount      : DataTypes.DOUBLE,
        status_id       : DataTypes.INTEGER,
    }, {});
    markup.associate = function (models) {
        // associations can be defined here
    };
    return markup;
};