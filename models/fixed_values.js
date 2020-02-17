'use strict';
module.exports = (sequelize, DataTypes) => {
    const fixed_discount     = sequelize.define('fixed_values', {
        discount_name: DataTypes.STRING,
        discount_code: DataTypes.STRING,
        discount     : DataTypes.DOUBLE,
        discount_unit: {
            type  : DataTypes.ENUM,
            values: ['ps', 'fxd']
        },
        discount_type: {
            type  : DataTypes.ENUM,
            values: ['a', 'd']
        },
        status_id    : DataTypes.INTEGER
    }, {});
    fixed_discount.associate = function (models) {
        // associations can be defined here
    };
    return fixed_discount;
};