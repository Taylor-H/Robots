const express = require('express');
const { Project, Robot, workerTasks } = require('../db');
// const { canTreatArrayAsAnd } = require('sequelize/types/lib/utils');
const robotsRouter = express.Router();

robotsRouter.get('/', async (req, res, next) => {
  try {
    const robots = await Robot.findAll({});
    res.json(robots);
  } catch (e) {
    next(e);
  }
});
robotsRouter.post('/', async (req, res, next) => {
  try {
    const project = await Robot.create(req.body);
    res.status(201).json(project);
  } catch (error) {
    next(error);
  }
});
robotsRouter.get('/:id', async (req, res, next) => {
  try {
    const robot = await Robot.findByPk(req.params.id);
    res.json(robot);
  } catch (e) {
    next(e);
  }
});
// PUT /api/projects/:id
robotsRouter.put('/:id', async (req, res, next) => {
  try {
    const robot = await Robot.findByPk(req.params.id);
    res.send(await robot.update(req.body));
  } catch (error) {
    next(error);
  }
});
// DELETE /api/projects/:id
robotsRouter.delete('/:id', async (req, res, next) => {
  try {
    const project = await Robot.findByPk(req.params.id);
    await project.destroy();
    res.send(project);
  } catch (error) {
    next(error);
  }
});

module.exports = robotsRouter;
