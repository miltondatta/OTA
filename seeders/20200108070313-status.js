'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('status', [
            {
                id         : '-1',
                status_id  : '-1',
                status_name: 'Deleted'
            }, {
                id         : '1',
                status_id  : '1',
                status_name: 'Draft'
            }, {
                id         : '2',
                status_id  : '2',
                status_name: 'New'
            }, {
                id         : '3',
                status_id  : '3',
                status_name: 'Active'
            }, {
                id         : '4',
                status_id  : '4',
                status_name: 'Inactive'
            }, {
                id         : '5',
                status_id  : '5',
                status_name: 'Booked'
            }, {
                id         : '6',
                status_id  : '6',
                status_name: 'Confirmed'
            }, {
                id         : '7',
                status_id  : '7',
                status_name: 'Not Paid'
            }, {
                id         : '8',
                status_id  : '8',
                status_name: 'Partially Paid'
            }, {
                id         : '9',
                status_id  : '9',
                status_name: 'Paid'
            }
        
        ], {});
    },
    
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('status', null, {});
    }
};
