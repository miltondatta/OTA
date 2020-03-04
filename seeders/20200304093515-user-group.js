'use strict';

module.exports = {
    up : (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('user_groups', [
            {
                group_name  : 'Group 1',
                description : 'Description of group 1',
                status_id   : 3,
                createdAt   : new Date(),
                updatedAt   : new Date()
            },
            {
                group_name  : 'Group 2',
                description : 'Description of group 2',
                status_id   : 3,
                createdAt   : new Date(),
                updatedAt   : new Date()
            }, {
                group_name  : 'Group 3',
                description : 'Description of group 3',
                status_id   : 4,
                createdAt   : new Date(),
                updatedAt   : new Date()
            },
            {
                group_name  : 'Group 4',
                description : 'Description of group 4',
                status_id   : 3,
                createdAt   : new Date(),
                updatedAt   : new Date()
            },
            {
                group_name  : 'Group 5',
                description : 'Description of group 5',
                status_id   : 4,
                createdAt   : new Date(),
                updatedAt   : new Date()
            }
        ], {});
    },
    
    down : (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('user_groups', null, {});
    }
};
