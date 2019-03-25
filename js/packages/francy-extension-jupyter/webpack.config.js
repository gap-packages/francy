var path = require('path');
var fs = require('fs');
var replace = require("replace");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const fPackage = require('./package.json');
const webpack = require('webpack');
const description = `'${fPackage.name}, v${fPackage.version} - ${fPackage.description}, by ${fPackage.author}.'`;
const defaultPlugins = [
  new webpack.DefinePlugin({ VERSION: JSON.stringify(fPackage.version), FRANCY_DESC: description }),
  new webpack.BannerPlugin(description)
];

module.exports = (env = {}) => {

  console.log(`Running webpack for production environment? ${env.production}`);

  fs.mkdirSync('./jupyter_francy/labextension', { recursive: true });
  fs.copyFileSync('./lab.README.md', './jupyter_francy/labextension/README.md');
  fs.copyFileSync('./lab.package.json', './jupyter_francy/labextension/package.json');

  replace({
    regex: 'VERSION',
    replacement: JSON.stringify(fPackage.version),
    paths: ['./jupyter_francy/labextension/package.json'],
    recursive: true,
    silent: true,
  });

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
            ["@babel/plugin-proposal-decorators", { "legacy": true }],
            ["@babel/plugin-transform-classes", { "globals": ["Error"] }]
          ]
        }
      }
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
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
      devtoolModuleFilenameTemplate: 'webpack:///[absolute-resource-path]'
    },
    optimization: {
      //runtimeChunk: false,
      minimizer: [
        new UglifyJsPlugin({
          parallel: true,
          uglifyOptions: {
            ecma: 6,
            compress: false
          },
          exclude: /@jupyterlab\/|@phosphor\//
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
    /**
     * Notebook extension
     *
     * This bundle only contains the part of the JavaScript that is run on
     * load of the notebook. This section generally only performs
     * some configuration for requirejs, and provides the legacy
     * "load_ipython_extension" function which is required for any notebook
     * extension.
     */
    Object.assign({}, base, {
      entry: path.join(__dirname, 'src', 'nb_extension.js'),
      output: Object.assign({}, base.output, {
        filename: 'extension.js',
        path: path.join(__dirname, 'jupyter_francy', 'nbextension')
      }),
      externals: [
        'base/js/namespace',
        'nbextensions/jupyter_francy/viz',
        'nbextensions/jupyter_francy/index'
      ]
    }),
    /**
     * This bundle contains the implementation of the extension.
     *
     * It must be an amd module
     */
    Object.assign({}, base, {
      entry: ['@babel/polyfill', path.join(__dirname, 'src', 'nb_index.js')],
      output: Object.assign({}, base.output, {
        filename: 'index.js',
        path: path.join(__dirname, 'jupyter_francy', 'nbextension')
      })
    }),
    /**
     * This is the jupyter lab extension builder. 
     */
    Object.assign({}, base, {
      entry: ['@babel/polyfill', path.join(__dirname, 'src', 'lab_extension.js')],
      output: Object.assign({}, base.output, {
        filename: 'extension.js',
        path: path.join(__dirname, 'jupyter_francy', 'labextension')
      })
    })
  ];
};
