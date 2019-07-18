const db = require('../data/dbConfig');

function getRecipe() {
    return db('recipes')
};

function getShoppingList(recipe_id) {
    return db('instructions')
            .select("ingredient_name","qty")
            .innerJoin('ingredients', "ingredient_id", "ingredients.id")
            .where({recipe_id})
            .orderBy("step_id")
};

function getInstructions(recipe_id) {
    return db('instructions')
            .select("description")
            .where({recipe_id})
            .orderBy("step_id")
};

module.exports = {
    getRecipe,
    getShoppingList,
    getInstructions
}