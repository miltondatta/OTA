'use strict';
module.exports = (sequelize, DataTypes) => {
  const airport = sequelize.define('airport', {
    ident: DataTypes.STRING,
    type: DataTypes.STRING,
    name: DataTypes.STRING,
    latitude_deg: DataTypes.DOUBLE,
    longitude_deg: DataTypes.DOUBLE,
    elevation_ft: DataTypes.INTEGER,
    continent: DataTypes.STRING,
    iso_country: DataTypes.STRING,
    iso_region: DataTypes.STRING,
    municipality: DataTypes.STRING,
    scheduled_service: DataTypes.INTEGER,
    gps_code: DataTypes.STRING,
    iata_code: DataTypes.STRING,
    local_code: DataTypes.STRING,
    home_link: DataTypes.STRING,
    wikipedia_link: DataTypes.STRING,
    keywords: DataTypes.STRING,
    score: DataTypes.INTEGER,
    last_updated: DataTypes.DATE
  }, {});
  airport.associate = function(models) {
    // associations can be defined here
  };
  return airport;
};