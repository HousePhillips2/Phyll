const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  app: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'dist')
};

module.exports = {
  entry: {
    app: PATHS.app
  },
  output: {
    path: PATHS.built,
    filename: '[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin([
      title: 'Phyll'
    ])
  ]
}