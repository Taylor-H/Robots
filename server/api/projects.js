const express = require('express');
// const { canTreatArrayAsAnd } = require('sequelize/types/lib/utils');
const projectsRouter = express.Router();
const {Project, workerTasks} = require('../db/models/Project');

projectsRouter.get('/', async (req, res, next) => {
  try {
    const projects = await Project.findAll();
    res.json(projects);
  } catch (e) {
    next(e);
  }
});
projectsRouter.post('/', async (req, res, next) => {
  try {
    const project = await Project.create(req.body)
    res.status(201).json(project);
  } catch (error) {
    next(error);
  }
});
projectsRouter.get('/:id', async (req, res, next) => {
  try {
   const project = await Project.findByPk(req.params.id)
    res.json(project);
  } catch (error) {
    next(error);
  }
});

// PUT /api/projects/:id
projectsRouter.put('/:id', async (req, res, next) => {
  try {
    const project = await Project.findByPk(req.params.id);
    res.send(await project.update(req.body));
  } catch (error) {
    next(error);
  }
});

// DELETE /api/projects/:id
projectsRouter.delete('/:id', async (req, res, next) => {
  try {
    const project = await Project.findByPk(req.params.id);
    await project.destroy();
    res.send(project);
  } catch (error) {
    next(error);
  }
});

module.exports = projectsRouter
