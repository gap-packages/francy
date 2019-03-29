const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const fPackage = require('./package.json');
const description = `'${fPackage.name}, v${fPackage.version} - ${fPackage.description}, by ${fPackage.author}.'`;
const defaultPlugins = [
  new webpack.DefinePlugin({ VERSION: JSON.stringify(fPackage.version), FRANCY_DESC: description }),
  new webpack.BannerPlugin(description)
];

/* global __dirname */
/* eslint-disable no-console */
module.exports = (env = {}) => {

  console.log(`Running webpack for production environment? ${env.production}`);

  /**
   * Custom webpack loaders are generally the same for all webpack bundles, hence
   * stored in a separate local variable.
   */
  var loaders = [{
    test: /\.js$/,
    exclude: /(node_modules|bower_components)/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: [
          ['@babel/plugin-proposal-decorators', { 'legacy': true }],
          ['@babel/plugin-transform-classes', { 'globals': ['Error'] }]
        ]
      }
    }
  }];

  var web = {
    mode: env.production ? 'production' : 'development',
    target: 'web',
    entry: {
      FrancyJS: ['@babel/polyfill', 'francy'],
      D3Renderer: ['francy-renderer-d3'],
      GraphvizRenderer: ['francy-renderer-graphviz']
    },
    stats: {
      colors: false,
      hash: true,
      timings: true,
      assets: true,
      chunks: true,
      chunkModules: true,
      modules: true,
      children: true,
    },
    output: {
      filename: env.production ? '[name].bundle.min.js' : '[name].bundle.js',
      libraryTarget: 'umd',
      path: path.join(__dirname, 'dist')
    },
    optimization: {
      runtimeChunk: false,
      minimizer: [
        new UglifyJsPlugin({
          parallel: true,
          uglifyOptions: {
            ecma: 6,
            compress: false
          }
        })
      ]
    },
    devtool: env.production ? undefined : 'source-map',
    module: {
      rules: loaders
    },
    plugins: defaultPlugins
  };

  return [ web ];
};

/* eslint-enable no-console */
