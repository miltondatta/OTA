'use strict';
const faker  = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('users', [
            {

                role_id    : '1',
                name       : 'SuperAdmin',
                email      : 'superadmin@admin.com',
                password   : bcrypt.hashSync('123456'),
                is_verified: '1',
                createdAt  : new Date(),
                updatedAt  : new Date()
            },
            {

                role_id    : '2',
                name       : 'Admin',
                email      : 'admin@admin.com',
                password   : bcrypt.hashSync('123456'),
                is_verified: '1',
                createdAt  : new Date(),
                updatedAt  : new Date()
            },
            {

                role_id    : '3',
                name       : 'Executive',
                email      : 'executive@admin.com',
                password   : bcrypt.hashSync('123456'),
                is_verified: '1',
                createdAt  : new Date(),
                updatedAt  : new Date()
            }
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('users', null, {});

    }
};
