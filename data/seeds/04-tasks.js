exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("tasks").insert([
        {
          projectId: 1,
          description: "Check computer configuration",
          note:
            "Check if the computer configuration meet the minimum requirement to start this project and install VSCode.",
          completed: false,
        },
        {
          projectId: 1,
          description: "Install node.js and npm",
          note:
            "Go to https://nodejs.org to download the stable version of node.js. Make sure to download the version 12.x or higher.",
          completed: false,
        },
      ]);
    });
};
