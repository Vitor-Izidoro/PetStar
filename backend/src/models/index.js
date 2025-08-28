const { sequelize } = require('../config/database');
const User = require('./User');
const Pet = require('./Pet');

// Definir associações
User.hasMany(Pet, { foreignKey: 'owner_id', as: 'pets' });
Pet.belongsTo(User, { foreignKey: 'owner_id', as: 'owner' });

module.exports = {
  sequelize,
  User,
  Pet
};