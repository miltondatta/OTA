'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('status', [
            {
                id         : '1',
                status_id  : '-999',
                status_name: 'Deleted'
            }, {
                id         : '2',
                status_id  : '1',
                status_name: 'Draft'
            }, {
                id         : '3',
                status_id  : '2',
                status_name: 'New'
            }, {
                id         : '4',
                status_id  : '3',
                status_name: 'Active'
            }, {
                id         : '5',
                status_id  : '4',
                status_name: 'Inactive'
            }
        
        ], {});
    },
    
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('status', null, {});
    }
};
