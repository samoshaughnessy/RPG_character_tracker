
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('skills').del()
    .then(function () {
      // Inserts seed entries
      return knex('skills').insert([
        {name: 'Athletics', description: "You've trained to do parkor"},
        {name: 'Pick-Lock', description: "You've trained to pick locks and open doors"},
        {name: 'Stealth', description: "You are good at hiding"},
        {name: 'Observation', description: "Your ability to be aware of your surroundings"}


      ]);
    });
};
