const Webpack               = require('webpack');
const path                  = require('path');
const merge                 = require('webpack-merge');
const HMRPlugin             = require('webpack-hot-middleware')
const HtmlWebpackPlugin     = require('html-webpack-plugin');
const ExtractTextPlugin     = require('extract-text-webpack-plugin');
const NpmInstallPlugin      = require('npm-install-webpack-plugin');
const autoprefixer          = require('autoprefixer');
const validate              = require('webpack-validator');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const nodeModulesPath       = path.resolve(__dirname, 'node_modules');

const TARGET                = process.env.npm_lifecycle_event;

console.log("Packing for: " + TARGET);

const buildPath             = path.resolve(__dirname, 'dist');
const mainPath              = path.resolve(__dirname, 'src', 'app.jsx');

var appName = 'app';
var outputFile = appName + '.js';

const common = {
  cache: true,
  debug: true,
  entry: mainPath,
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
      loader: 'style!css'
    },
    {
      test: /\.less$/,
      loader: "style!css!less"
    },
    {
      test: /\.scss$/,
      loader: "style!css!postcss!sass"
    },
    { 
      test: /\.png$/, 
      loader: "url-loader?limit=100000" 
    },
    { 
      test: /\.jpg$/, 
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
    new HtmlWebpackPlugin({
        template: './src/index.template.ejs',
        inject: 'body'
    }),
    new Webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      Tether: 'tether'
    }),
  ],
  postcss: function() {
    return [autoprefixer({
      browsers: ['last 3 versions']
    })];
  }
};

if (TARGET === 'dev' || !TARGET) {
  module.exports = merge(common, {
    devtool: 'eval-source-map',
    devServer: {
      historyApiFallback: true
    },
    output: {
      publicPath: ''
    },
    plugins: [
      new NpmInstallPlugin({
        save: true // --save
      })
    ]
  });
}

if (TARGET === 'build') {
  module.exports = merge(common, {
    devtool: 'source-map',
    output: {
      path: './dist'
    },
  });
}

module.exports = validate(common);