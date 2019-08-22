'use strict';
const faker = require('faker');

module.exports = {
    up: (queryInterface, Sequelize) => {

        //Add altering commands here.
        //Return a promise to correctly handle asynchronicity.

        //Example:
        for (var i = 0; i < 100; i++) {
            const operators = [3, 7, 8, 9];
            const select_operator = operators[Math.floor(Math.random() * operators.length)];
            const number = '01' + select_operator + (Math.floor(10000000 + Math.random() * (99999999 - 10000000)));

            var result = queryInterface.bulkInsert('users', [{
                name: faker.name.findName(),
                email: faker.internet.email(),
                password: '123456',
                mobile: number,
                createdAt: new Date(),
                updatedAt: new Date()
            }], {});
        }

        return result;
    },

    down: (queryInterface, Sequelize) => {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.

          Example: */

        return queryInterface.bulkDelete('users', null, {});
    }
};
