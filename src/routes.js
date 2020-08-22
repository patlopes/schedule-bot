const express = require('express');

const TestController = require('./controllers/TestController');

const routes = express.Router();

routes.post('/test', TestController.create);

module.exports = routes;