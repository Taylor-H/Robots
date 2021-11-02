const Sequelize = require('sequelize');
const db = require('../database');

const Project = db.define('Project', {
  title: {
    allowNull: false,
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
    },
  },
  deadline: {
    type: Sequelize.DATE,
    validate: {
      isDate: true,
    },
  }, //could have been validate:  isIn: [['foo', 'bar']],
  completed: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  priority: {
    type: Sequelize.INTEGER,
    validate: {
      min: 1,
      max: 10,
    },
  },
  description: {
    type: Sequelize.TEXT,
    defaultValue:
      'A project to end all. The details of your project will go here. The more details the better. You can look back at this later to see what to do or what you did. If you are seeing this message then edit your project and add a description.',
  },
  // robots:{
  //   type: Sequelize.VIRTUAL,
  //   foreignKey: 'projects',
  //   include: {
  //     model: 'Robot'
  //   }
  // , { Sequelize, modelName: 'project' }}
});

module.exports = Project;
