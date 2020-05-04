const PR = require("../models/Project");

class PRController {
  static async create(req, res, next) {
    try {
      const pr = PR.create(req.body);
      res.status(201).json(pr);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = PRController;
