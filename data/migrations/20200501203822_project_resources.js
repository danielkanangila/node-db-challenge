
exports.up = function(knex) {
  
  return knex.schema.createTable("project_resources", function(t) {
    t.increments();
    t.integer("projectId").notNullable().unsigned()
				.references("id")
				.inTable("projects")
                ;
		t.integer("resourceId").notNullable().unsigned()
				.references("id")
				.inTable("resources")
                ;
    t.timestamps(true, true);
  });
  
};

exports.down = function(knex) {
  
  return knex.schema.dropTable("project_resources");
  
};
