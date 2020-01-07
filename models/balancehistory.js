'use strict';
module.exports = (sequelize, DataTypes) => {
    const BalanceHistory     = sequelize.define('balance_history', {
        user_id         : DataTypes.INTEGER,
        previous_balance: DataTypes.DOUBLE,
        current_balance : DataTypes.DOUBLE,
        trans_amount    : DataTypes.DOUBLE,
        description     : DataTypes.TEXT
    }, {});
    BalanceHistory.associate = function (models) {
        // associations can be defined here
    };
    return BalanceHistory;
};