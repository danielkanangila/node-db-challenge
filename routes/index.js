const { Router } = require("express");
const ResourcesController = require("../controllers/ResourcesController");
const ProjectsController = require("../controllers/ProjectsController");
const TasksController = require("./../controllers/TasksController");
const PRController = require("./../controllers/PRController");
const { verifyProjectId, verifyTaskId } = require("./../middleware");

const router = Router();

// Resources routes
router.get("/resources", ResourcesController.index);
router.post("/resources", ResourcesController.create);
router.get("/resources/:id", ResourcesController.show);
router.put("/resources/:id", ResourcesController.update);
router.delete("/resources/:id", ResourcesController.del);

// Projects routes
router.get("/projects", ProjectsController.index);
router.post("/projects", ProjectsController.create);
router.get("/projects/:id", verifyProjectId, ProjectsController.show);
router.put("/projects/:id", verifyProjectId, ProjectsController.update);
router.delete("/projects/:id", verifyProjectId, ProjectsController.del);

// Tasks routes
router.get("/projects/:id/tasks", verifyProjectId, TasksController.index);
router.post("/projects/:id/tasks", verifyProjectId, TasksController.create);
router.get(
  "/projects/:id/tasks/:taskId",
  verifyProjectId,
  verifyTaskId,
  TasksController.show
);
router.put(
  "/projects/:id/tasks/:taskId",
  verifyProjectId,
  verifyTaskId,
  TasksController.update
);
router.delete(
  "/projects/:id/tasks/:taskId",
  verifyProjectId,
  verifyTaskId,
  TasksController.del
);

// Projects resources routes
router.post("/projects/:id/resources", PRController.create);

module.exports = router;
