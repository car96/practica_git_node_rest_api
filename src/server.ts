export { }; // fix: [ts] Cannot redeclare block-scoped variable
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const config = require('./config/config');
const log = require('./helpers/log');
require('./models/index');


// routes
const routes = require('./routes/index');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(`/api/${config.app.version}`, routes);
app.listen(config.app.port, () => log.info(`API Server is running on: http://${config.app.host}:${config.app.port}/api/${config.app.version}`));
module.exports = app;