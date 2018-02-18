const path = require('path');
const del = require('del');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = (env = {}) => {

  const isProduction = env.production === true;
  const clean = env.clean === true;
  
  console.log(`Running webpack for production environment? ${isProduction}`);
  
  if (clean) {
    console.log('Removing files from output directories...');
    del.sync(['./extensions/jupyter_francy/src/francy.bundle.*', './extensions/browser/francy.bundle.*']);
  }
  
  let plugins = [];
  let fileName = 'francy.bundle.js';
  let sourceMap = 'inline-source-map';
  
  if (isProduction) {
    // FIXME this stopped working !?
    plugins.push(new UglifyJsPlugin({exclude: /.*test.js/}));
    fileName = 'francy.bundle.min.js';
    sourceMap = 'hidden-source-map';
  }

  let amd = {
    entry: './src/francy.js',
    output: {
      filename: fileName,
      path: path.join(__dirname, './extensions/jupyter_francy/src'),
      libraryTarget: 'amd'
    },
    devtool: sourceMap,
    module: {
      loaders: [{
        loader: 'babel-loader'
      }]
    },
    plugins: plugins
  };
  
  let browser = JSON.parse(JSON.stringify(amd));
  browser.target = 'web';
  browser.output.libraryTarget = 'umd';
  browser.output.path = path.join(__dirname, './extensions/browser');
  browser.plugins = [];
  
  return [ amd, browser ];
};
