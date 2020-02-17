'use strict';
module.exports = (sequelize, DataTypes) => {
    const user_group_mapping     = sequelize.define('user_group_mapping', {
        group_id: DataTypes.INTEGER,
        user_id : DataTypes.INTEGER,
    }, {});
    user_group_mapping.associate = function (models) {
        // associations can be defined here
    };
    return user_group_mapping;
};