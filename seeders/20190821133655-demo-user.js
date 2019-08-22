'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      //Add altering commands here.
      //Return a promise to correctly handle asynchronicity.

      //Example:

      return queryInterface.bulkInsert('users', [{
        name: 'John Doe',
        email: 'demo@demo.com',
        password: '123456',
        mobile: '01551807064',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example: */

      return queryInterface.bulkDelete('users', null, {});
  }
};
