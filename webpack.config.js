const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  app: path.join(__dirname, 'app/index.js'),
  build: path.join(__dirname, 'dist')
};

module.exports = {
  entry: {
    app: PATHS.app
  },
  module: {
    loaders: [
      { test: /\.js$/, include: __dirname + '/app', loader: 'babel-loader' }
    ]
  },
  output: {
    path: PATHS.build,
    filename: '[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Houston',
      //add a template here but need to add the dep and tie it all toegether.
      //template:
    })
  ]
};
