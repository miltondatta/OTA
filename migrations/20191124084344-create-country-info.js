'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('country_infos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      country_name: {
        type: Sequelize.STRING
      },
      official_name_english: {
        type: Sequelize.STRING
      },
      iso3166_1_alpha_2: {
        type: Sequelize.STRING(20)
      },
      iso3166_1_alpha_3: {
        type: Sequelize.STRING(20)
      },
      dial: {
        type: Sequelize.STRING
      },
      fifa: {
        type: Sequelize.STRING(20)
      },
      iso4217_currency_alphabetic_code: {
        type: Sequelize.STRING(20)
      },
      iso4217_currency_country_name: {
        type: Sequelize.STRING
      },
      iso4217_currency_minor_unit: {
        type: Sequelize.INTEGER
      },
      iso2417_currency_name: {
        type: Sequelize.STRING
      },
      iso4217_currency_numeric_code: {
        type: Sequelize.INTEGER
      },
      is_independent: {
        type: Sequelize.STRING(30)
      },
      capital: {
        type: Sequelize.STRING(30)
      },
      continent: {
        type: Sequelize.STRING(20)
      },
      tld: {
        type: Sequelize.STRING(7)
      },
      languages: {
        type: Sequelize.STRING
      },
      geo_name_id: {
        type: Sequelize.INTEGER
      },
      insertedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('country_infos');
  }
};