'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {

        return queryInterface.bulkInsert('transaction_types', [
            {
                code  : '1101',
                name  : 'Deposit',
                status: 3
            },
            {
                code  : '1201',
                name  : 'Air Ticket',
                status: 3
            },
            {
                code  : '1202',
                name  : 'Air Ticket Cancel',
                status: 3
            },
            {
                code  : '1203',
                name  : 'Air Ticket Cancel Charge',
                status: 3
            },
            {
                code  : '1301',
                name  : 'Reissue',
                status: 3
            },
            {
                code  : '1302',
                name  : 'Reissue Charge',
                status: 3
            },
            {
                code  : '1401',
                name  : 'Credit Limit Deposit',
                status: 3
            },
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('transaction_types', null, {});
    }
};
