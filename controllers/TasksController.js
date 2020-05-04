const Task = require("./../models/Task");

class TasksController {
    async static index(req, res, next) {
        try {
            const tasks = await Task.findTasksByProjectId();
            res.json(tasks);
        } catch (error) {
            next(error)
        }
    }
    async static show(req, res, next) {
        try {
            res.json(req.task)
        } catch (error) {
            next(error)
        }
    }
    async static create(req, res, next) {
        try {
            const payload = req.body;
            payload.completed = req.body.completed || false;
            const task = Task.create(payload);
            res.status(201).json(task);
        } catch (error) {
            next(error)
        }
    }
    async static update(req, res, next) {
        try {
            const task = Task.update(req.task.id, req.body);
            res.json(Task)
        } catch (error) {
            next(error)
        }
    }
    async static del (req, res, next) {
        try {
            await Task.remove(req.task.id);
            res.json({ id: req.task.id })
        } catch (error) {
            next(error)
        }
    }
}

module.exports = TasksController;