const express = require('express');
const path = require('path');

function routes(isDevelopment) {
  const router = express.Router();

  // Home route, output index.html
  router.get('/', (req, res) => {
    if (isDevelopment) {
      res.sendFile(path.join(__dirname, '..', 'client', 'index.development.html'));
    } else {
      res.sendFile(path.join(__dirname, '..', 'client', 'index.html'));
    }
  });
  return router;
}

module.exports = routes;
