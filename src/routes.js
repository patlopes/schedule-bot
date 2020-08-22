const express = require('express');

const TestController = require('./controllers/TestController');

const routes = express.Router();

routes.get('/test', TestController.index);
routes.post('/test', TestController.create);

module.exports = routes;