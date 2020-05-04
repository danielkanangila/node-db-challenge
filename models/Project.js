const Model = require("./../data/Model");
const Task = require("./Task");
const PR = require("./ProjectResource");

class Project extends Model {
  constructor() {
    super();
    this.tableName = "projects";

    this.jsonSchema = {
      type: "object",
      required: ["name"],
      properties: {
        name: { type: "string" },
        description: { type: "string" },
        completed: { type: "boolean" },
      },
    };
  }

  async findTasksProjectById(projectId) {
    const project = await this.findById(projectId);
    const tasks = await Task.query().select("*").where("projectId", projectId);
    const resources = await PR.query()
      .join("resources", "resources.id", "project_resources.resourceId")
      .select("resources.*")
      .where("project_resources.id", projectId);
    return {
      ...project,
      tasks,
      resources,
    };
  }
}

module.exports = new Project();
