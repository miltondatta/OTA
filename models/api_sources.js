'use strict';
module.exports = (sequelize, DataTypes) => {
  const api_sources = sequelize.define('api_sources', {
    api_code: DataTypes.STRING
  }, {});
  api_sources.associate = function(models) {
    // associations can be defined here
  };
  return api_sources;
};