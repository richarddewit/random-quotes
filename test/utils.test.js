/*global fetch describe it, beforeEach, before, after*/
// describe, it, beforeEach  are supplied by mocha

import { assert } from 'chai';

import randomNumber from '../client/src/js/utils/randomNumber';
import getRandomQuote from '../client/src/js/utils/getRandomQuote';
import throttle from '../client/src/js/utils/throttle';


describe('Utils', () => {
  describe('randomNumber', () => {
    it('should return a random integer between a `min` (3) and a `max` (5)', () => {
      // Loop 10 times to reduce statistical errors. It's still a random...
      let i = 0;
      while (i++ < 10) {
        const rnd = randomNumber(3, 5);
        assert.isNumber(rnd, 'random number is a number');
        assert.isAtLeast(rnd, 3, 'random number is at least 3');
        assert.isAtMost(rnd, 5, 'random number is at most 5');
      }
    });
  });

  describe('getRandomQuote', () => {
    it('should return a promise', () => {
      const rndQuote = getRandomQuote();
      assert.instanceOf(rndQuote, Promise);
    });
  });

  describe('throttle', () => {
    it('should not let the function be fired more than once per `limit` (50) ms', (done) => {
      let results = [];
      function fire() {
        results.push('fired');
      }

      // Throttle for 50ms
      const throttledFire = throttle(fire, 50);

      throttledFire();
      assert.typeOf(throttledFire, 'function', 'throttledFire is a function');

      // Fired after 20ms
      setTimeout(() => {
        throttledFire();

        assert.equal(results.length, 1, 'throttledFire should be fired only once');

        // Fired after 40ms (60ms total)
        setTimeout(() => {
          throttledFire();
          throttledFire();

          assert.equal(results.length, 2, 'throttledFire should be fired only twice');
          done();
        }, 40);
      }, 20);


    });
  });
});
