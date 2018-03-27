const path = require('path');
const del = require('del');
const webpack = require('webpack');
const fPackage = require('./package.json');
const defaultPlugins = [
  new webpack.DefinePlugin({VERSION: JSON.stringify(fPackage.version)}), 
  new webpack.BannerPlugin(`${fPackage.name}, v${fPackage.version}, ${fPackage.description}, ${fPackage.author}.`)
];

module.exports = (env = {}) => {

  const isProduction = env.production === true;
  const clean = env.clean === true;
  
  console.log(`Running webpack for production environment? ${isProduction}`);
  
  if (clean) {
    console.log('Removing files from output directories...');
    del.sync(['./extensions/jupyter_francy/src/francy.bundle.*', 
    './extensions/jupyter_francy/src/d3.*',
    './extensions/browser/francy.bundle.*']);
  }

  let fileName = 'francy.bundle.js';
  let sourceMap = '';
  
  if (isProduction) {
    fileName = 'francy.bundle.min.js';
    sourceMap = 'nosources-source-map';
  }

  let amd = {
    mode: isProduction ? 'production' : 'development',
    entry: ['babel-polyfill', './src/francy.js'],
    output: {
      libraryTarget: 'amd',
      filename: fileName,
      path: path.join(__dirname, './extensions/jupyter_francy/src'),
    },
    devtool: sourceMap,
    module: {
      rules: [{
        loader: 'babel-loader',
      }]
    },
    plugins: defaultPlugins
  };
  
  let browser = JSON.parse(JSON.stringify(amd));
  browser.target = 'web';
  browser.output.libraryTarget = 'umd';
  browser.output.path = path.join(__dirname, './extensions/browser');
  browser.plugins = defaultPlugins;
  
  return [ amd, browser ];
};
