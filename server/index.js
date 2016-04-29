const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes');
const apiRoutes = require('./api');

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', routes);
app.use('/assets', express.static('../client'));
app.use('/api', apiRoutes);

app.listen(port);
console.info(`Server listening on port ${port}`);
