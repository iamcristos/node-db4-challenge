const express = require('express');
const {
    getRecipe
} = require('../controller/recipe');


const route = express.Router()

route.get('/', getRecipe);

module.exports = route