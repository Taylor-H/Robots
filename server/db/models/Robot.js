const Sequelize = require('sequelize');
const db = require('../database');

const Robot = db.define('Robot', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },
  fuelType: {
    type: Sequelize.ENUM,
    values: ['gas', 'diesel', 'electric'],
    defaultValue: 'electric',
  },
  fuelLevel: {
    type: Sequelize.DECIMAL,
    defaultValue: 100.00,
    validate: {
      isDecimal: true,
      min: 0,
      max: 100,
    }
  },
  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue: '/assets/robot.png',
  },
});

module.exports = Robot
