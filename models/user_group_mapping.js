'use strict';
module.exports = (sequelize, DataTypes) => {
  const user_group_mapping = sequelize.define('user_group_mapping', {
    group_id: DataTypes.STRING
  }, {});
  user_group_mapping.associate = function(models) {
    // associations can be defined here
  };
  return user_group_mapping;
};