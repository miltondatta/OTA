'use strict';
module.exports = (sequelize, DataTypes) => {
  const airline = sequelize.define('airline', {
    name: DataTypes.STRING,
    alias: DataTypes.STRING,
    iata: DataTypes.STRING,
    icao: DataTypes.STRING,
    callsign: DataTypes.STRING,
    country: DataTypes.STRING,
    active: DataTypes.STRING
  }, {});
  airline.associate = function(models) {
    // associations can be defined here
  };
  return airline;
};