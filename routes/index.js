const router = require("express").Router();

const ResourcesController = require("../controllers/ResourcesController");
const ProjectsController = require("../controllers/ProjectsController");
const TasksController = require("./../controllers/TasksController");

// Resources routes
router.get("/resources", ResourcesController.index);
router.post("/resources", ResourcesController.create);
router.get("/resources/:id", ResourcesController.show);
router.put("/resources/:id", ResourcesController.update);
router.delete("/resources/:id", ResourcesController.del);

// Projects routes
router.get("/projects", ProjectsController.index);
router.post("/projects", ProjectsController.create);
router.get("/projects/:id", ProjectsController.show);
router.put("/projects/:id", ProjectsController.update);
router.delete("/projects/:id", ProjectsController.del);

// Tasks routes
router.get("/projects/:id/tasks", TasksController.index);
router.post("/projects/:id/tasks", TasksController.create);
router.get("/projects/:id/tasks/:taskId", TasksController.show);
router.put("/projects/:id/tasks/:taskId", TasksController.update);
router.delete("/projects/:id/tasks/:taskId", TasksController.del);

module.exports = router;
