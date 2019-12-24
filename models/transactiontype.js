'use strict';
module.exports = (sequelize, DataTypes) => {
    const TransactionType     = sequelize.define('transaction_types', {
        code  : DataTypes.STRING,
        name  : DataTypes.STRING,
        status: DataTypes.INTEGER
    }, {});
    TransactionType.associate = function (models) {
        // associations can be defined here
    };
    return TransactionType;
};