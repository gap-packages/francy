const path = require('path');
const fs = require('fs');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');
const lerna = require('../../lerna.json');

/**
 * This webpack.config.js is shared by all packages.
 **/

/* global __dirname */
/* eslint-disable no-console */
module.exports = options => env => {

  if (!options.currentPackageConfig || !options.modulePath) {
    throw new Error('Missing options object!');
  }

  console.log('---Running webpack---');

  env.production = Boolean(env.production);

  console.log(`Production environment: ${env.production}`);

  let dist_dir = path.join(options.modulePath, '/dist');
  fs.mkdirSync(dist_dir, {recursive: true});

  console.log('Creating output directory: ' + dist_dir);

  const description = `'${options.currentPackageConfig.name}, v${lerna.version}, ${options.currentPackageConfig.description} - by ${options.currentPackageConfig.author}.'`;
  const defaultPlugins = [
    new webpack.DefinePlugin({VERSION: JSON.stringify(lerna.version), FRANCY_DESC: description}),
    new webpack.BannerPlugin(description)
  ];

  console.log('Module description: ' + description);

  /**
   * Custom webpack loaders are generally the same for all webpack bundles, hence
   * stored in a separate local variable.
   */
  let loaders = [{
    test: /\.js$/,
    include: [/src/],
    exclude: [/node_modules/, /bower_components/, /dist/, /__test__/],
    use: {
      loader: 'babel-loader',
      options: {
        plugins: [
          ['@babel/plugin-proposal-decorators', {'legacy': true}],
          ['@babel/plugin-transform-classes', {'globals': ['Error']}]
        ]
      }
    }
  }, {
    test: /\.css$/,
    use: ['style-loader', 'css-loader']
  }];

  let base = {
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
      libraryTarget: 'umd',
    },
    optimization: {
      minimize: env.production,
      minimizer: [
        new TerserPlugin({
          parallel: true,
          minify: TerserPlugin.swcMinify,
          terserOptions: {
            ecma: 2020,
            format: {
              comments: false,
            }
          },
          extractComments: false,
        })
      ]
    },
    devtool: env.production ? false : 'source-map',
    module: {
      rules: loaders
    },
    plugins: defaultPlugins
  };

  return [
    Object.assign({}, base, {
      entry: [path.join(options.modulePath, './index.js')],
      output: Object.assign({}, base.output, {
        filename: 'index.js',
        path: dist_dir
      })
    })
  ];
};
/* eslint-enable no-console */
