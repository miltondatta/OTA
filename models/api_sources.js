'use strict';
module.exports = (sequelize, DataTypes) => {
    const api_sources     = sequelize.define('api_sources', {
        api_code : DataTypes.STRING,
        api_name : DataTypes.STRING,
        end_point: DataTypes.STRING,
        status_id: DataTypes.INTEGER
    }, {});
    api_sources.associate = function (models) {
        // associations can be defined here
    };
    return api_sources;
};