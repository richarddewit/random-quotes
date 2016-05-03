const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const routes = require('./routes');
const apiRoutes = require('./api');

const app = express();
const port = process.env.PORT || 8080;
const isProduction = app.get('env') === 'production';

// Setup body parser to handle POST data as JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Setup request logging (`dev` is `tiny` with colors)
app.use(morgan('dev'));

// Setup routes and static files

app.use('/', routes(isProduction));
app.use('/api', apiRoutes(isProduction));
app.use('/assets', express.static(path.join(__dirname, '..', 'client', 'assets')));

// Start the server
app.listen(port);
console.info('Environment:', app.get('env'));
console.info(`Server listening on port ${port}`);
