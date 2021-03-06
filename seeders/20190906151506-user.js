'use strict';
const faker  = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('users', [
            {
                role_id     : '1',
                name        : 'SuperAdmin',
                email       : 'superadmin@admin.com',
                password    : bcrypt.hashSync('123456'),
                mobile      : '0111111111111',
                balance     : '0.00',
                credit_limit: '0.00',
                is_verified : '1',
                status      : '3',
                createdAt   : new Date(),
                updatedAt   : new Date()
            },
            {
                role_id     : '2',
                name        : 'Admin',
                email       : 'admin@admin.com',
                password    : bcrypt.hashSync('123456'),
                mobile      : '0111111111111',
                balance     : '0.00',
                credit_limit: '0.00',
                is_verified : '1',
                status      : '3',
                createdAt   : new Date(),
                updatedAt   : new Date()
            },
            {
                role_id     : '3',
                name        : 'Executive',
                email       : 'executive@admin.com',
                password    : bcrypt.hashSync('123456'),
                mobile      : '0111111111111',
                balance     : '0.00',
                credit_limit: '0.00',
                is_verified : '1',
                status      : '3',
                createdAt   : new Date(),
                updatedAt   : new Date()
            },
        
        ], {});
    },
    
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('users', null, {});
        
    }
};
