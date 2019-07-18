
exports.up = function(knex) {
  return knex.schema
            .alterTable('recipes', tbl=>{
                tbl.unique('recipe_name')
            })
            .alterTable('ingredients', tbl=>{
                tbl.unique('ingredient_name')
            })
};

exports.down = function(knex) {
  return knex.schema
            .alterTable('recipes', tbl=>{
                tbl.dropColumns('recipe_name')
            })
            .alterTable('ingredients', tbl=>{
                tbl.dropColumns('ingredient_name')
            })
};
