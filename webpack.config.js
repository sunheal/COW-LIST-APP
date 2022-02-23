const webpack = require('webpack');
const path = require('path');

const config = {
  entry: './client/src/index.js',
  devServer: {
    host: 'localhost',
    port: 9000,
    open: true
  },
  output: {
    path: path.resolve(__dirname, './client/dist'),
    filename: 'bundle.js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.m?(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  }
};

module.exports = config;