var path = require('path');
const fPackage = require('./package.json');
const webpack = require('webpack');
const description = `'${fPackage.name}, v${fPackage.version}, ${fPackage.description}, ${fPackage.author}.'`;
const defaultPlugins = [
  new webpack.DefinePlugin({VERSION: JSON.stringify(fPackage.version), FRANCY_DESC: description}), 
  new webpack.BannerPlugin(description)
];

module.exports = (env = {}) => {

  const isProduction = env.production === true;

  /**
   * Custom webpack loaders are generally the same for all webpack bundles, hence
   * stored in a separate local variable.
   */
  var loaders = [
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          plugins: [
            ["@babel/plugin-proposal-decorators", { "legacy": true }],
            ["@babel/plugin-transform-classes", { globals: ["Error"] }]
          ]
        }
      }
    },
    //{ test: /\.json$/, loader: 'json-loader' },
    { test: /\.css$/, loader: 'style-loader!css-loader' },
    { test: /\.html$/, loader: 'file-loader' },
    { test: /\.(jpg|png|gif)$/, loader: 'file-loader' },
    {
      test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url-loader?limit=10000&mimetype=application/font-woff'
    },
    {
      test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url-loader?limit=10000&mimetype=application/font-woff'
    },
    {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
    },
    { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader' },
    {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
    }
  ];
  
  var base = {
    mode: isProduction ? 'production' : 'development',
    output: {
      libraryTarget: 'amd',
      devtoolModuleFilenameTemplate: 'webpack:///[absolute-resource-path]'
    },
    optimization: {
      mergeDuplicateChunks: true
    },
    devtool: 'source-map',
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
        path: path.join(
          __dirname,
          'jupyter_francy',
          'nbextension'
        )
      }),
      externals: [
        'base/js/namespace',
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
        path: path.join(
          __dirname,
          'jupyter_francy',
          'nbextension'
        )
      })
    }),
  ];
};
