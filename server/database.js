// Pseudo-database

function filterQuotes(quotes =[], key = '', filter = '') {
  if (Array.isArray(quotes)) {
    if (typeof key === 'string') {
      if (typeof filter === 'string') {
        const str = filter.toLowerCase();
        return quotes.filter(quote => (
            quote.hasOwnProperty(key) && quote[key].toLowerCase().indexOf(str) >= 0)
        );
      }
    }

    return quotes;
  }

  return [];
}

function findQuotesByKeyword(quotes, keyword) {
  return filterQuotes(quotes, 'text', keyword);
}

function findQuotesByName(quotes, name) {
  return filterQuotes(quotes, 'name', name);
}

module.exports = {
  findQuotesByKeyword,
  findQuotesByName,
};
