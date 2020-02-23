'use strict';
module.exports = (sequelize, DataTypes) => {
    const api_sources     = sequelize.define('api_sources', {
        api_code : DataTypes.STRING,
        api_name : DataTypes.STRING,
        end_point: DataTypes.STRING,
        status_id    : {
            type      : DataTypes.INTEGER,
            references: {
                model: 'status',
                key  : 'id'
            }
        }
    }, {});
    api_sources.associate = function (models) {
        api_sources.belongsTo(models.status, {foreignKey: 'status_id', as: 'status'})
    };
    return api_sources;
};