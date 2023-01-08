var path = require('path');
var fs = require('fs');
const UglifyJsPlugin = require('terser-webpack-plugin');
const fPackage = require('./package.json');
const webpack = require('webpack');
const description = `'${fPackage.name}, v${fPackage.version} - ${fPackage.description}, by ${fPackage.author}. Renders [application/vnd.francy+json] MIME Type on Jupyter Environments.'`;
const defaultPlugins = [
  new webpack.DefinePlugin({VERSION: JSON.stringify(fPackage.version), FRANCY_DESC: description}),
  new webpack.BannerPlugin(description)
];

/**
 * This webpack.config.js is shared by all packages.
 **/

/* global __dirname */
/* eslint-disable no-console */
module.exports = (env = {production:false}) => {

  let dist_dir = './dist'

  console.log(`Running webpack for production environment? ${env.production}`);

  fs.mkdirSync(dist_dir, {recursive: true});

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
        plugins: [
          ['@babel/plugin-proposal-decorators', {'legacy': true}],
          ['@babel/plugin-transform-classes', {'globals': ['Error']}]
        ]
      }
    }
  }];

  var base = {
    mode: env.production ? 'production' : 'development',
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
      libraryTarget: 'amd',
    },
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          parallel: true,
          terserOptions: {
            ecma: 6,
            compress: false
          }
        })
      ]
    },
    devtool: env.production ? '' : 'source-map',
    module: {
      rules: loaders
    },
    plugins: defaultPlugins
  };

  return [
    Object.assign({}, base, {
      entry: [path.join(__dirname, './index.js')],
      output: Object.assign({}, base.output, {
        filename: 'index.js',
        path: path.join(__dirname, dist_dir)
      })
    })
  ];
};
/* eslint-enable no-console */
