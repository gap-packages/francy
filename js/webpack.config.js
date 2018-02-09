const path = require('path');
const rimraf = require('rimraf');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = (env = {}) => {

  const isProduction = env.production === true;
  
  console.log(`Running webpack for production environment? ${isProduction}`);
  
  let plugins = [];
  let fileName = 'francy.bundle.js';
  let sourceMap = 'inline-source-map';
  
  if (isProduction) {
    plugins.push(new UglifyJsPlugin({exclude: /.*test.js/}));
    fileName = 'francy.bundle.min.js';
    sourceMap = 'hidden-source-map';
  }
  
  console.log('Cleaning folder ./dist');
  rimraf.sync('./dist');
  
  let amd = {
    entry: './src/francy.js',
    output: {
      filename: fileName,
      path: path.join(__dirname, './dist/amd'),
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
  delete browser.output.libraryTarget;
  browser.output.path = path.join(__dirname, './dist/browser');
  
  return [ amd, browser ];
};
