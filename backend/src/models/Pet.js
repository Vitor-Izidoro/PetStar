const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Pet = sequelize.define('Pet', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING(30),
    allowNull: false,
    validate: {
      notNull: { msg: 'Nome do pet é obrigatório' },
      notEmpty: { msg: 'Nome do pet não pode estar vazio' }
    }
  },
  species: {
    type: DataTypes.ENUM('cachorro', 'gato', 'pássaro', 'roedor', 'outros'),
    allowNull: false
  },
  breed: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  weight: {
    type: DataTypes.FLOAT,
    allowNull: true
  },
  color: {
    type: DataTypes.STRING(30),
    allowNull: true
  },
  birth_date: {
    type: DataTypes.DATE,
    allowNull: true
  },
  gender: {
    type: DataTypes.ENUM('macho', 'fêmea'),
    allowNull: false
  },
  temperament: {
    type: DataTypes.ENUM('calmo', 'agitado', 'amigável', 'arredio', 'agressivo'),
    defaultValue: 'calmo'
  },
  special_care: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  feeding_instructions: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  medication: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  veterinarian_contact: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  emergency_contact: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  photo_url: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  is_active: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }
}, {
  tableName: 'pets',
  timestamps: true
});

module.exports = Pet;