'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('airlines', {
      id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      alias: {
        type: Sequelize.STRING
      },
      iata: {
        type: Sequelize.STRING
      },
      icao: {
        type: Sequelize.STRING
      },
      callsign: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
      },
      active: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('airlines');
  }
};