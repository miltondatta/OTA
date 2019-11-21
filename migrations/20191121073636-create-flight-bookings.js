'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('flight_bookings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      reference: {
        type: Sequelize.STRING
      },
      pnr: {
        type: Sequelize.TEXT
      },
      itenerary_amount: {
        type: Sequelize.BIGINT
      },
      markup: {
        type: Sequelize.BIGINT
      },
      markdown: {
        type: Sequelize.BIGINT
      },
      vat: {
        type: Sequelize.BIGINT
      },
      voucher_id: {
        type: Sequelize.INTEGER
      },
      voucher_amount: {
        type: Sequelize.BIGINT
      },
      total_amount: {
        type: Sequelize.BIGINT
      },
      ticket_time_limit: {
        type: Sequelize.STRING
      },
      payment_status: {
        type: Sequelize.INTEGER
      },
      issue_ticket_status: {
        type: Sequelize.INTEGER
      },
      void_ticket_status: {
        type: Sequelize.INTEGER
      },
      cacel_ticket_status: {
        type: Sequelize.INTEGER
      },
      pnr_request_response: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('flight_bookings');
  }
};