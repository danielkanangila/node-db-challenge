const { Router } = require("express");
const ResourcesController = require("../controllers/ResourcesController");
const ProjectsController = require("../controllers/ProjectsController");
const TasksController = require("./../controllers/TasksController");
const PRController = require("./../controllers/PRController");
const {
  verifyProjectId,
  verifyTaskId,
  verifyResourceId,
} = require("./../middleware");

const router = Router();

// Resources routes
router.get("/resources", ResourcesController.index);
router.post("/resources", ResourcesController.create);
router.get("/resources/:id", verifyResourceId, ResourcesController.show);
router.put("/resources/:id", verifyResourceId, ResourcesController.update);
router.delete("/resources/:id", verifyResourceId, ResourcesController.del);

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
router.post("/projects/:id/resources", verifyProjectId, PRController.create);
router.get(
  "/projects/:id/resources",
  verifyProjectId,
  ProjectsController.showResourcesAndTasks
);
module.exports = router;
