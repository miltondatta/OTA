'use strict';

module.exports = (sequelize, DataTypes) => {
    const fixed_values     = sequelize.define('fixed_values', {
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
        status_id    : {
            type:DataTypes.INTEGER,
            /*references: {
                model: status,
                key: 'id'
            }*/
        }
    }, {});
    fixed_values.associate = function (models) {
        // associations can be defined here
    };
    return fixed_values;
};