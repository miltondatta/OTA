'use strict';
module.exports = (sequelize, DataTypes) => {
    const user_role     = sequelize.define('user_role', {
        role     : DataTypes.STRING,
        role_eng : DataTypes.STRING,
        user_type: DataTypes.INTEGER,
        status   : DataTypes.INTEGER
    }, {});
    user_role.associate = function (models) {
        // associations can be defined here
    };
    return user_role;
};