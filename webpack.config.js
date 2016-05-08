var path = require('path');
var webpack = require('webpack');

var IS_PRODUCTION = process.env.NODE_ENV === 'production';
var webpackDevServer = 'http://localhost:3000';

module.exports = {
  devtool: IS_PRODUCTION ? 'cheap-module-source-map' : 'eval',
  entry: (IS_PRODUCTION ? [] : [
    'webpack-dev-server/client?' + webpackDevServer,
    'webpack/hot/only-dev-server',
  ]).concat([
    './client/src/js/main',
  ]),
  output: {
    path: path.join(__dirname, 'client', 'assets', 'js'),
    filename: 'bundle.js',
    publicPath: (IS_PRODUCTION ? '' : webpackDevServer) + '/assets/js/',
  },
  plugins: IS_PRODUCTION ? [] : [
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'client', 'src', 'js'),
    }],
  },
  resolve: {
    alias: {
      'react$': path.join(
        __dirname, 'node_modules', 'react', 'dist',
        (IS_PRODUCTION ? 'react.min.js' : 'react.js')
      ),
      'react-dom$': path.join(
        __dirname, 'node_modules', 'react-dom', 'dist',
        (IS_PRODUCTION ? 'react-dom.min.js' : 'react-dom.js')
      ),
    }
  }
};
