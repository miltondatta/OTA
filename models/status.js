'use strict';
module.exports = (sequelize, DataTypes) => {
    const status     = sequelize.define('status', {
        status_id: DataTypes.INTEGER,
        name     : DataTypes.STRING
    }, {});
    status.associate = function (models) {
        // associations can be defined here
    };
    return status;
};