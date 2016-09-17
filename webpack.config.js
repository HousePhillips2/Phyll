const Webpack         = require('webpack');
const path            = require('path');
const babel           = require('babel-core');
const es2015          = require('babel-preset-es2015');
const react           = require('babel-preset-react');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const buildPath       = path.resolve(__dirname, 'dist');
const mainPath        = path.resolve(__dirname, 'src/components', 'app.jsx');

const config = {

  entry: [
    mainPath
    ],
  output: {
    path: buildPath,
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  module: {
    loaders: [{
      test: /\.jsx$|\.js$/,
      loader: 'babel',
      query: {
        presets:['es2015','react']
      },
      exclude: [nodeModulesPath]
    },
    {
      test: /\.css$/,
      loader: 'style!css'
    }]
  },

};

module.exports = config;