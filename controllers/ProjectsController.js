const Project = require("./../models/Project");

class ProjectsController {
    async static index(req, res, next) {
        try {
            const projects = await Project.findAll();
            res.json(projects);
        } catch (error) {
            next(error)
        }
    }
    async static show(req, res, next) {
        try {
            res.json(req.project)
        } catch (error) {
            next(error)
        }
    }
    async static create(req, res, next) {
        try {
            const payload = req.body;
            payload.completed = req.body.completed || false;
            const project = Project.create(payload);
            res.status(201).json(project);
        } catch (error) {
            next(error)
        }
    }
    async static update(req, res, next) {
        try {
            const project = Project.update(req.project.id, req.body);
            res.json(project)
        } catch (error) {
            next(error)
        }
    }
    async static del (req, res, next) {
        try {
            await Project.remove(req.project.id);
            res.json({ id: req.project.id })
        } catch (error) {
            next(error)
        }
    }
}

module.exports = ProjectsController;