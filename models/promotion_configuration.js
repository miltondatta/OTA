'use strict';
module.exports = (sequelize, DataTypes) => {
    const promotion_configuration     = sequelize.define('promotion_configurations', {
        promotion_name    : DataTypes.STRING,
        promotion_code    : DataTypes.STRING,
        from_city_country : DataTypes.STRING,
        from_city         : DataTypes.STRING,
        to_city_country   : DataTypes.STRING,
        to_city           : DataTypes.STRING,
        flight_type       : DataTypes.STRING,
        plating_carrier   : DataTypes.STRING,
        airline           : DataTypes.STRING,
        issue_date_from   : DataTypes.DATE,
        issue_date_to     : DataTypes.DATE,
        travel_date_from  : DataTypes.DATE,
        travel_date_to    : DataTypes.DATE,
        time_from         : DataTypes.TIME,
        time_to           : DataTypes.TIME,
        travel_class_id   : DataTypes.STRING,
        booking_class     : DataTypes.STRING,
        user_group_id     : DataTypes.STRING,
        user_id           : DataTypes.STRING,
        api_source_id     : DataTypes.INTEGER,
        promo_type        : DataTypes.STRING,
        value_type        : DataTypes.STRING,
        value             : DataTypes.DOUBLE,
        max_amount        : DataTypes.DOUBLE,
        status_id         : {
            type       : DataTypes.INTEGER,
            references : {
                model : 'status',
                key   : 'id'
            }
        }
    }, {});
    promotion_configuration.associate = function (models) {
        promotion_configuration.belongsTo(models.status, {foreignKey : 'status_id', as : 'status'});
    };
    return promotion_configuration;
};