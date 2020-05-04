const PR = require("../models/ProjectResource");

class PRController {
  static async create(req, res, next) {
    try {
      const pr = await PR.create(req.body);
      res.status(201).json(pr);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = PRController;
