'use strict';
module.exports = (sequelize, DataTypes) => {
  const payment = sequelize.define('payment', {
    receivable_amount: DataTypes.DOUBLE,
    payment_amount: DataTypes.DOUBLE,
    payment_option: DataTypes.STRING,
    transaction_id: DataTypes.STRING
  }, {});
  payment.associate = function(models) {
    // associations can be defined here
  };
  return payment;
};