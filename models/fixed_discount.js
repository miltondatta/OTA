'use strict';
module.exports = (sequelize, DataTypes) => {
  const fixed_discount = sequelize.define('fixed_discount', {
    discount_name: DataTypes.STRING
  }, {});
  fixed_discount.associate = function(models) {
    // associations can be defined here
  };
  return fixed_discount;
};