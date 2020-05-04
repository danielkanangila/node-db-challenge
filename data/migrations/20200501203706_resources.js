
exports.up = function(knex) {
  
  return knex.schema.createTable("resources", function(t) {
    t.increments();
    t.string("name").unique().notNullable();
		t.text("description").nullable();
    t.timestamps(true, true);
  });
  
};

exports.down = function(knex) {
  
  return knex.schema.dropTable("resources");
  
};
