
const path = require('path');

const config = {
  //devtool: 'source-map', // Not sure if/how this works
  entry: path.join(__dirname, 'client/src/index.jsx'),
  output: {
    path: path.join(__dirname, './public/bundles'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
      },
    ],
  },
};

module.exports = config;
