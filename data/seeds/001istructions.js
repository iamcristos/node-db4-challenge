
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        { recipe_id:1,
          ingredient_id:1,
          step_id: 1, 
          description:"clean your pot and put water", 
          qty:2},
      ]);
    });
};
