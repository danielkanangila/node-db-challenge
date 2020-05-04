exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("projects").insert([
        {
          name: "Simple Node.js Application",
          description: "Simple server side application with node.js",
          completed: false,
        },
        {
          name: "Node.js simple API",
          description: "RESTful node API created with express framework",
          completed: false,
        },
        {
          name: "Node.js database manipulation with pg",
          description:
            "Node application connected to database with postgre sql database",
          completed: false,
        },
        {
          name: "RESTful full functioning API",
          description:
            "Node AOI connect with the database and using knex module to handle database query",
          completed: false,
        },
      ]);
    });
};
