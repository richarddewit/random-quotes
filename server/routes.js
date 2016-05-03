const express = require('express');
const path = require('path');

function routes(isProduction) {
  const router = express.Router();

  // Home route, output index.html
  router.get('/', (req, res) => {
    if (isProduction) {
      res.sendFile(path.join(__dirname, '..', 'client', 'index.html'));
    } else {
      res.sendFile(path.join(__dirname, '..', 'client', 'index.development.html'));
    }
  });
  return router;
}

module.exports = routes;
