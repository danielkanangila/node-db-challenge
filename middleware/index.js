const Project = require("./../models/Project");
const Task = require("./../models/Task");

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
    const task = await Task.findById(req.params.id);
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
