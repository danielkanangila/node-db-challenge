const Project = require("./../models/Project");

class ProjectsController {
  static async index(req, res, next) {
    try {
      const projects = await Project.findAll();
      res.json(projects);
    } catch (error) {
      next(error);
    }
  }
  static async show(req, res, next) {
    try {
      res.json(req.project);
    } catch (error) {
      next(error);
    }
  }
  static async showResourcesAndTasks(req, res, next) {
    try {
      const project = await Project.findTasksProjectById(req.project.id);
      res.json(project);
    } catch (error) {
      next(error);
    }
  }
  static async create(req, res, next) {
    try {
      const payload = req.body;
      payload.completed = req.body.completed || false;
      const project = await Project.create(payload);
      res.status(201).json(project);
    } catch (error) {
      next(error);
    }
  }
  static async update(req, res, next) {
    try {
      const payload = {
        ...req.project,
        ...req.body,
      };
      const project = await Project.update(req.project.id, payload);
      res.json(project);
    } catch (error) {
      next(error);
    }
  }
  static async del(req, res, next) {
    try {
      await Project.remove(req.project.id);
      res.json({ id: req.project.id });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ProjectsController;
