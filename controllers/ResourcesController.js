const Resource = require("../models/Resource");

class ResourcesController {
  static async index(req, res, next) {
    try {
      const resources = await Resource.findAll();
      res.json(resources);
    } catch (error) {
      next(error);
    }
  }
  static show(req, res, next) {
    try {
      res.json(req.resource);
    } catch (error) {
      next(error);
    }
  }
  static async create(req, res, next) {
    try {
      const resource = Resource.create(req.body);
      res.status(201).json(resource);
    } catch (error) {
      next(error);
    }
  }
  static async update(req, res, next) {
    try {
      const resource = Resource.update(req.resource.id, req.body);
      res.json(resource);
    } catch (error) {
      next(error);
    }
  }
  static async del(req, res, next) {
    try {
      await Resource.remove(req.resource.id);
      res.json({ id: req.resource.id });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ResourcesController;
