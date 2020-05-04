const Task = require("./../models/Task");
const Project = require("./../models/Project");

class TasksController {
  static async index(req, res, next) {
    try {
      const tasks = await Task.findTasksByProjectId(req.project.id);
      res.json(tasks);
    } catch (error) {
      next(error);
    }
  }
  static show(req, res, next) {
    try {
      res.json(req.task);
    } catch (error) {
      next(error);
    }
  }
  static async create(req, res, next) {
    try {
      const payload = {
        projectId: req.project.id,
        completed: false,
        ...req.body,
      };
      const task = await Task.create(payload);
      res.status(201).json(task);
    } catch (error) {
      next(error);
    }
  }
  static async update(req, res, next) {
    try {
      const payload = {
        ...req.task,
        ...req.body,
      };
      const task = await Task.update(payload.id, payload);
      res.json(task);
    } catch (error) {
      next(error);
    }
  }
  static async del(req, res, next) {
    try {
      await Task.remove(req.task.id);
      res.json({ id: req.task.id });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = TasksController;
