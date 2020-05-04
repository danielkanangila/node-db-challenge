exports.up = function (knex) {
  return knex.schema.createTable("projects", function (t) {
    t.increments();
    t.string("name").notNullable();
    t.text("description").nullable();
    t.boolean("completed").nullable();
    t.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("projects");
};
