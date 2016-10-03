const Webpack               = require('webpack');
const path                  = require('path');
const merge                 = require('webpack-merge');
const HMRPlugin             = require('webpack-hot-middleware');
const ExtractTextPlugin     = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin     = require('html-webpack-plugin');
const NpmInstallPlugin      = require('npm-install-webpack-plugin');
const autoprefixer          = require('autoprefixer');
const validate              = require('webpack-validator');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const utils                 = require('./server/helpers/webpack-helpers.js');
const nodeModulesPath       = path.resolve(__dirname, 'node_modules');

const TARGET                = process.env.npm_lifecycle_event || 'a short trip to DEV town.';

console.log("Packing for: " + TARGET);

const buildPath             = path.resolve(__dirname, 'dist');
const mainPath              = path.resolve(__dirname, 'src', 'index.jsx');

var appName = 'app';
var outputFile = appName + '.js';

const common = {
  cache: true,
  debug: true,
  entry: {
    app: mainPath,
    vendor: [
      'tether',
      'bootstrap',
      'react-bootstrap',
      'react',
      'react-router',
      'jquery',
      'react-autosuggest',
      'd3'
    ]
  },
  output: {
    path: buildPath,
    filename: outputFile,
    sourceMapFilename: 'app.map'
  },
  module: {
    loaders: [
      {
      test: /\.js[x]?$/,
      loaders: ['babel-loader?presets[]=es2015&presets[]=react&presets[]=stage-0'],
      exclude: /(node_modules|bower_components)/
      },
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('css')
    },
    {
      test: /\.less$/,
      loader: "style!css!less"
    },
    {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('css!sass')
    },
    {
      test: /\.png$/,
      loader: "url-loader?limit=100000"
    },
    {
      test: /\.jpg$|\.jpeg$/,
      loader: "file-loader"
    },
    {
      test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=application/font-woff&name=[path][name].[ext]"'
    },
    {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=application/octet-stream'
    },
    {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file'
    },
    {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=image/svg+xml'
    }]
  },
  plugins: [
    new NpmInstallPlugin(),
    new Webpack.optimize.OccurrenceOrderPlugin(),
    new Webpack.optimize.CommonsChunkPlugin("vendor", "externals.js"),
    new ExtractTextPlugin('style.css', {
      allChunks: true
    }),
    new HtmlWebpackPlugin({
        template: './src/index.template.ejs',
        inject: 'body'
    }),
    new Webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": 'jquery',
      "window.Tether": 'tether'
    }),
  ],
  postcss: function() {
    return [autoprefixer({
      browsers: ['last 3 versions']
    })];
  }
};

if (TARGET !== 'production') {
  module.exports = merge(common, {
    devtool: 'eval-source-map',
    devServer: {
      historyApiFallback: true
    },
    output: {
      path: buildPath
    },
    plugins: [
      new NpmInstallPlugin({
        save: true
      })
    ]
  });
}

if (TARGET === 'production') {
  module.exports = merge(common, {
    devtool: 'source-map',
    output: {
      path: buildPath
    },
    plugins: [
    ]
  });
}

module.exports = validate(common);
