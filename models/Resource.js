const Model = require("./../data/Model");

class Resource extends Model {
  constructor() {
    super();
    this.tableName = "resources";

    this.jsonSchema = {
      type: "objects",
      require: ["name"],
      properties: {
        name: { type: "string" },
        description: { type: "string" },
      },
    };
  }
}

module.exports = new Resource();
