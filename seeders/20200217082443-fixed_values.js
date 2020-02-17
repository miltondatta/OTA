'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('fixed_values', [
            {
                discount_name: 'Markup',
                discount_code: 'markup',
                discount     : '100',
                discount_unit: 'fxd',
                discount_type: 'a',
                status_id    : 3
            }, {
                discount_name: 'Aita',
                discount_code: 'aita',
                discount     : '.003',
                discount_unit: 'ps',
                discount_type: 'a',
                status_id    : 3
            },
            {
                discount_name: 'Aita Discount',
                discount_code: 'aids',
                discount     : '7',
                discount_unit: 'ps',
                discount_type: 'd',
                status_id    : 3
            }
        ], {});
    },
    
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('fixed_values', null, {});
    }
};
