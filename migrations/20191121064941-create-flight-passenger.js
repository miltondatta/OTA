'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('flight_passengers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      booking_id: {
        type: Sequelize.INTEGER
      },
      first_name: {
        type: Sequelize.STRING(50)
      },
      last_name: {
        type: Sequelize.STRING(50)
      },
      nationality: {
        type: Sequelize.STRING(50)
      },
      gender: {
        type: Sequelize.STRING(15)
      },
      date_of_birth: {
        type: Sequelize.DATE
      },
      passport_number: {
        type: Sequelize.STRING(30)
      },
      passport_expiry_date: {
        type: Sequelize.DATE
      },
      passenger_type: {
        type: Sequelize.STRING(15)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('flight_passengers');
  }
};