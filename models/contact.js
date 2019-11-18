'use strict';
module.exports = (sequelize, DataTypes) => {
  const contact = sequelize.define('contact', {
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {});
  contact.associate = function(models) {
    // associations can be defined here
  };
  return contact;
};