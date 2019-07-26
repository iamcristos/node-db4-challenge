const response = require('../helper/response');
const db = require('../model/db');

async function getRecipe(req, res) {
    try {
        const recipes = await db.getRecipe()
        if(!recipes.length) {
            return response.errorHelper(res, 200, "No recipe at the moment")
        }
        return response.succesHelper(res, 200, recipes)
    } catch (error) {
        return response.errorHelper(res, 400, "Error cannot get recipes")
    }
}

async function getShoppingList(req, res) {
    
    try {
        
    } catch (error) {
        
    }
}

module.exports = {
    getRecipe
}