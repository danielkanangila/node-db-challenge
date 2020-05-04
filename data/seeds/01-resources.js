exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("resources")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("resources").insert([
        {
          name: "VSCode",
          description: "You need VSCode editor to complete this task",
        },
        {
          name: "Computer",
          description:
            "Window 10 PC, 2.4Ghz CPU, 8G Memory, minimum 50Gb free space required",
        },
        {
          name: "Node.JS",
          description: "node.js version 12.x and npm version 6.x",
        },
        {
          name: "expressJs",
          description: "express js version 4.x or higher.",
        },
        {
          name: "pg",
          description: "node.js postgre sql client",
        },
        {
          name: "knex",
          description: "node.js query builder",
        },
        { name: "Frontend Tech", description: "ReactJs, HTML, CSS" },
      ]);
    });
};
