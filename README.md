# random-quotes
Display random quotes on demand!

## Installation

**This requires Node v6.0.0 or higher due to the use of ES6 in the backend scripts!**

``` plain
git clone https://github.com/richarddewit/random-quotes.git
cd random-quotes
npm i
sudo npm i -g gulp-cli nodemon webpack
```

## Running

### Development

Run application:

``` plain
npm run backend-dev-server
npm run webpack-dev-server
gulp fonts watch
```

and go to [http://localhost:8080/](http://localhost:8080/).

### Production

Building for production:

``` plain
npm run bundle
```

Run application:

``` plain
npm start
```

and go to [http://localhost:8080/](http://localhost:8080/).

## Testing

Install dependencies:

``` plain
sudo npm i -g mocha
```

Run tests:

``` plain
npm test
```
