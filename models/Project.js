const Model = require("./../data/Model");

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
}

module.exports = new Project();
