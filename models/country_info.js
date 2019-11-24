'use strict';
module.exports = (sequelize, DataTypes) => {
  const country_info = sequelize.define('country_info', {
    country_name: DataTypes.STRING,
    official_name_english: DataTypes.STRING,
    iso3166_1_alpha_2: DataTypes.STRING,
    iso3166_1_alpha_3: DataTypes.STRING,
    dial: DataTypes.STRING,
    fifa: DataTypes.STRING,
    iso4217_currency_alphabetic_code: DataTypes.STRING,
    iso4217_currency_country_name: DataTypes.STRING,
    iso4217_currency_minor_unit: DataTypes.INTEGER,
    iso2417_currency_name: DataTypes.STRING,
    iso4217_currency_numeric_code: DataTypes.INTEGER,
    is_independent: DataTypes.STRING,
    capital: DataTypes.STRING,
    continent: DataTypes.STRING,
    tld: DataTypes.STRING,
    languages: DataTypes.STRING,
    geo_name_id: DataTypes.INTEGER
  }, {});
  country_info.associate = function(models) {
    // associations can be defined here
  };
  return country_info;
};