exports.up = function (knex) {
  return knex.schema.createTable("tasks", function (t) {
    t.increments();
    t.integer("projectId")
      .notNullable()
      .unsigned()
      .references("id")
      .inTable("projects");
    t.text("description").notNullable();
    t.text("note").nullable();
    t.boolean("completed").nullable();
    t.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("tasks");
};
