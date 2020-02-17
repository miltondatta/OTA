'use strict';
module.exports = (sequelize, DataTypes) => {
    const fixed_discount     = sequelize.define('fixed_values', {
        discount_name: DataTypes.STRING,
        discount_code: DataTypes.STRING,
        discount     : DataTypes.DOUBLE,
        discount_unit: DataTypes.ENUM,
        discount_type: DataTypes.ENUM,
        status_id    : DataTypes.INTEGER
    }, {});
    fixed_discount.associate = function (models) {
        // associations can be defined here
    };
    return fixed_discount;
};