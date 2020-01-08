'use strict';
module.exports = (sequelize, DataTypes) => {
    const User     = sequelize.define('user', {
        name              : DataTypes.STRING,
        role_id           : DataTypes.INTEGER,
        email             : DataTypes.STRING,
        password          : DataTypes.STRING,
        mobile            : DataTypes.STRING,
        balance           : DataTypes.DOUBLE,
        credit_limit      : DataTypes.DOUBLE,
        verification_token: DataTypes.STRING,
        token_sent_at     : DataTypes.DATE,
        is_verified       : DataTypes.INTEGER,
    }, {});
    User.associate = function (models) {
        // associations can be defined here
    };
    return User;
};