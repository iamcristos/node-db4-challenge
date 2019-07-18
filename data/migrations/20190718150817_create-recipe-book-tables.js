
exports.up = function(knex) {
  return knex.schema
  .createTable('recipes', tbl=>{
    tbl.increments();
    tbl.string('recipe_name', 225)
        .notNullable()
  })
  .createTable('ingredients', tbl=>{
      tbl.increments();
      tbl.string('ingredient_name', 225)
        .notNullable()
  })
  .createTable('instructions', tbl=>{
    tbl.increments();
    tbl.integer('recipe_id')
        .unsigned()
        .references('recipes.id')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    tbl.integer('ingredient_id')
        .unsigned()
        .references('ingredients.id')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    tbl.integer('step_id')
        .notNullable()
    tbl.string('description')
        .notNullable()
    tbl.integer('qty')
        .notNullable();
})
};

exports.down = function(knex) {
   return knex.schema
    .dropTableIfExists('recipes')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('instructions')
};
