const path = require('path');
const del = require('del');
const webpack = require('webpack');
const fPackage = require('./package.json');
const description = `'${fPackage.name}, v${fPackage.version}, ${fPackage.description}, ${fPackage.author}.'`;
const defaultPlugins = [
  new webpack.DefinePlugin({ VERSION: JSON.stringify(fPackage.version), FRANCY_DESC: description }),
  new webpack.BannerPlugin(description)
];

module.exports = (env = {}) => {

  const isProduction = env.production === true;
  const clean = env.clean === true;

  console.log(`Running webpack for production environment? ${isProduction}`);

  if (clean) {
    console.log('Removing files from output directories...');
    del.sync(['./dist/*']);
  }

  let fileName = fPackage.name + '.bundle.js';
  let sourceMap = 'source-map';

  if (isProduction) {
    fileName = fPackage.name + '.bundle.min.js';
    sourceMap = undefined;
  }

  let amd = {
    mode: isProduction ? 'production' : 'development',
    entry: ['@babel/polyfill', './index.js'],
    output: {
      libraryTarget: 'amd',
      filename: fileName,
      path: path.join(__dirname, './dist/amd'),
    },
    devtool: sourceMap,
    module: {
      rules: [{
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          plugins: [
            ["@babel/plugin-proposal-decorators", { "legacy": true }],
            ["@babel/plugin-transform-classes", { "globals": ["Error"] }]
          ]
        }
      }]
    },
    plugins: defaultPlugins
  };

  let browser = JSON.parse(JSON.stringify(amd));
  browser.target = 'web';
  browser.output.libraryTarget = 'umd';
  browser.output.path = path.join(__dirname, './dist/browser');
  browser.plugins = defaultPlugins;

  return [amd, browser];
};
