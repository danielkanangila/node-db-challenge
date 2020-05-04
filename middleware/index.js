const Project = require("./../models/Project");
const Task = require("./../models/Task");
const Resource = require("./../models/Resource");

exports.verifyProjectId = async (req, res, next) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res
        .status(400)
        .json({ message: "Could found the project with the specified ID." });
    }

    req.project = project;
    next();
  } catch (error) {
    next(error);
  }
};

exports.verifyTaskId = async (req, res, next) => {
  try {
    const task = await Task.query()
      .select("*")
      .where("id", req.params.taskId)
      .where("projectId", req.params.id)
      .first();
    if (!task) {
      return res
        .status(400)
        .json({ message: "Could not found the task with the specified ID." });
    }
    req.task = task;
    next();
  } catch (error) {
    next(error);
  }
};

exports.verifyResourceId = async (req, res, next) => {
  try {
    const resource = await Resource.findById(req.params.id);
    if (!resource) {
      return res.status(400).json({
        message: "Could not found the resource with the specified ID.",
      });
    }
    req.resource = resource;
    next();
  } catch (error) {
    next(error);
  }
};
