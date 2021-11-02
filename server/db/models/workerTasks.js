const Sequelize = require('sequelize');
const db = require('../database');

const workerTasks = db.define('workerTasks', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  }
});


module.exports = workerTasks

