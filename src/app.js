const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();

app.use(cors());
//app.use(express.json());
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(routes);

module.exports = app;