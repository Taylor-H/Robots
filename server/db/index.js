// The purpose of this module is to bring your Sequelize instance (`db`) together
// with your models, for which you'll find some blank files in this directory:
const db = require('./database');
const workerTasks = require('./models/workerTasks')
const Project = require('./models/Project');
const Robot = require('./models/Robot');
Robot.belongsToMany(Project, {as: 'Tasks', through: 'workerTasks', foreignKey: 'robotId'})
Project.belongsToMany(Robot, {as: 'Worker', through: 'workerTasks', foreignKey: 'projectId'});


module.exports = {
  // Include your models in this exports object as well!
  db,
  Project,
  Robot,
  workerTasks

};

