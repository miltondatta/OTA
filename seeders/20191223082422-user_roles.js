'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('user_roles', [
            {
                role     : 'super_admin',
                role_eng : 'Super Admin',
                user_type: 1,
                status   : 1,
                createdAt  : new Date(),
                updatedAt  : new Date()
            }, {
                role     : 'admin',
                role_eng : 'Admin',
                user_type: 2,
                status   : 1,
                createdAt  : new Date(),
                updatedAt  : new Date()
            }, {
                role     : 'executive',
                role_eng : 'Executive',
                user_type: 3,
                status   : 1,
                createdAt  : new Date(),
                updatedAt  : new Date()
            },
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('user_roles', null, {});
    }
};
