const express = require('express');
const quotes = require('./quotes.json');

const apiRoutes = express.Router();

apiRoutes.get('/quotes', (req, res) => {
  res.json(quotes);
});

apiRoutes.get('/quotes/search/:keyword', (req, res) => {
  const keyword = req.params.keyword.toLowerCase();
  res.json(quotes.filter(quote => quote.text.toLowerCase().indexOf(keyword) >= 0));
});

apiRoutes.get('/quotes/quotee/:name', (req, res) => {
  const name = req.params.name.toLowerCase();
  res.json(quotes.filter(quote => quote.name.toLowerCase().indexOf(name) >= 0));
});

module.exports = apiRoutes;
