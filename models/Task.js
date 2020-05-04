const Model = require("./../data/Model");

class Task extends Model {
  constructor() {
    super();
    this.tableName = "tasks";
    // Data validation schema
    this.jsonSchema = {
      type: "object",
      require: ["projectId", "description"],
      properties: {
        projectId: { type: "integer" },
        description: { type: "string" },
        note: { type: "string" },
        completed: { type: "boolean" },
      },
    };
  }

  findTasksByProjectId(projectId) {
    return this.query()
      .join("projects", "projects.id", `${this.tableName}.projectId`)
      .select(
        "tasks.*",
        "projects.name as projectName",
        "projects.description as projectDescription"
      )
      .where(`${this.tableName}.projectId`, projectId);
  }
}

module.exports = new Task();
