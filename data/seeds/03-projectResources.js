exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("project_resources")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("project_resources").insert([
        { projectId: 1, resourceId: 1 },
        { projectId: 1, resourceId: 2 },
        { projectId: 1, resourceId: 3 },
      ]);
    });
};
