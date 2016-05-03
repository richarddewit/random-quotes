const express = require('express');

const quotes = require('./quotes.json');
const { findQuotesByKeyword, findQuotesByName } = require('./database');

function apiRoutes(isProduction) {
  const router = express.Router();

  // Return all quotes
  router.get('/quotes', (req, res) => {
    res.json(quotes);
  });

  // Filter quotes on keyword
  router.get('/quotes/search/:keyword', (req, res) => {
    res.json(findQuotesByKeyword(quotes, req.params.keyword));
  });

  // Filter quotes on quotee name
  router.get('/quotes/quotee/:name', (req, res) => {
    res.json(findQuotesByName(quotes, req.params.name));
  });

  return router;
}

module.exports = apiRoutes;
