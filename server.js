const express = require('express');
const helmet = require('helmet');
const logger = require('morgan');
const recipeRoute = require('./route/recipe');

const server = express();

server.use(helmet());
server.use(logger('dev'));
server.use('/api/recipes', recipeRoute)

module.exports = server