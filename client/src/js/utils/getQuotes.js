/*global fetch*/

// This supplies the global `fetch`
import 'whatwg-fetch';

function getQuotes(callback) {
  // Callback -> function(error, result)
  fetch('/api/quotes')
    .then(response => response.json())
    .then(json => callback(null, json))
    .catch(err => callback(err, null));
}

export default getQuotes;
