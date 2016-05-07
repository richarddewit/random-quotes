import getQuotes from './getQuotes';
import randomNumber from './randomNumber';

const getRandomQuote = () => {
  console.info('Fetching new quote');
  return new Promise((resolve, reject) => {
    getQuotes((err, quotes) => {
      if (err) {
        return reject(err);
      }
      if (!quotes || quotes.length === 0) {
        return reject('Couldn\'t find any quotes.');
      }

      const random = randomNumber(0, quotes.length - 1);
      return resolve(quotes[random]);
    });
  });
};

export default getRandomQuote;
