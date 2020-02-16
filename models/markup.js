'use strict';
module.exports = (sequelize, DataTypes) => {
  const markup = sequelize.define('markup', {
    flight_type: DataTypes.STRING
  }, {});
  markup.associate = function(models) {
    // associations can be defined here
  };
  return markup;
};