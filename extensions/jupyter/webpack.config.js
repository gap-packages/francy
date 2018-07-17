var path = require('path');
module.exports = (env = {}) => {

  const isProduction = env.production === true;

  /**
   * Custom webpack loaders are generally the same for all webpack bundles, hence
   * stored in a separate local variable.
   */
  var loaders = [
    {
      test: /\.js$/,
      include: [path.join(__dirname, 'src')],
      exclude: /.*node_modules\/((?!francy-js).)*$/,
      loader: 'babel-loader',
      query: { presets: ['env'] }
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
    devtool: 'source-map',
    module: {
      rules: loaders
    }
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
        'nbextensions/jupyter_francy/index',
        'nbextensions/jupyter_francy/d3',
        'nbextensions/jupyter_francy/francy'
      ]
    }),
  
    /**
     * This bundle contains the implementation of the extension.
     *
     * It must be an amd module
     */
    Object.assign({}, base, {
      entry: path.join(__dirname, 'src', 'nb_index.js'),
      output: Object.assign({}, base.output, {
        filename: 'index.js',
        path: path.join(
          __dirname,
          'jupyter_francy',
          'nbextension'
        )
      })
    }),
  
    /**
     * This bundle contains the implementation of the extension.
     *
     * It must be an amd module
     */
    Object.assign({}, base, {
      entry: path.join(__dirname, 'node_modules', 'francy-js', 'amd', 'francy.bundle.js'),
      output: Object.assign({}, base.output, {
        filename: 'francy.js',
        path: path.join(
          __dirname,
          'jupyter_francy',
          'nbextension'
        )
      })
    }),
  
    /**
     * This bundle contains the implementation of the extension dependencies.
     *
     * It must be an amd module
     */
    Object.assign({}, base, {
      entry: path.join(__dirname, 'node_modules', 'francy-js', 'lib', 'd3.min.js'),
      output: Object.assign({}, base.output, {
        filename: 'd3.js',
        path: path.join(
          __dirname,
          'jupyter_francy',
          'nbextension'
        )
      })
    })
  ];
};
