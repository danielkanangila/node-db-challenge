const Resource = require("../models/Resource");

class ResourcesController {
    async static index(req, res, next) {
        try {
            const resources = await Resource.findAll();
            res.json(resources);
        } catch (error) {
            next(error)
        }
    }
    async static show(req, res, next) {
        try {
            res.json(req.resource)
        } catch (error) {
            next(error)
        }
    }
    async static create(req, res, next) {
        try {
            const resource = Resource.create(req.body);
            res.status(201).json(resource);
        } catch (error) {
            next(error)
        }
    }
    async static update(req, res, next) {
        try {
            const resource = Resource.update(req.resource.id, req.body);
            res.json(resource)
        } catch (error) {
            next(error)
        }
    }
    async static del (req, res, next) {
        try {
            await Resource.remove(req.resource.id);
            res.json({ id: req.resource.id })
        } catch (error) {
            next(error)
        }
    }
}

module.exports = ResourcesController;