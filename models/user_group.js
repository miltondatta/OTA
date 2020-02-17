'use strict';
module.exports = (sequelize, DataTypes) => {
    const user_group     = sequelize.define('user_group', {
        group_name : DataTypes.STRING,
        description: DataTypes.TEXT,
        status_id  : DataTypes.INTEGER,
    }, {});
    user_group.associate = function (models) {
        // associations can be defined here
    };
    return user_group;
};