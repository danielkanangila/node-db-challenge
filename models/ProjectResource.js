const Model = require("./../data/Model");

class ProjectResource extends Model {
  constructor() {
    super();
    this.tableName = "project_resources";

    this.jsonSchema = {
      type: "object",
      required: ["projectId", "resourceId"],
      properties: {
        projectId: { type: "integer" },
        resourceId: { type: "integer" },
      },
    };
  }
}

module.exports = new ProjectResource();
