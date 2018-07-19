const path = require('path');
const webpack = require('webpack');
const fPackage = require('./package.json');

module.exports = function(config) {
  config.set({
    frameworks: [
      'mocha', 
      'chai'
    ],
    preprocessors: {
      './src/**/*.js': ['webpack'],
      './test/**/*.test.js': ['webpack']
    },
    files: [
      './node_modules/babel-polyfill/dist/polyfill.js',
      './test/**/*.test.js'
    ],
    exclude: [
      './**/**.json',
      './**/**.html'
    ],
    plugins: [
      'karma-chrome-launcher',
      'karma-mocha-reporter',
      'karma-webpack',
      'karma-mocha',
      'karma-chai',
    ],
    webpack: {
      mode: 'development',
      target: 'web',
      plugins: [
        new webpack.DefinePlugin({
          VERSION: JSON.stringify(fPackage.version), 
          FRANCY_DESC: JSON.stringify(fPackage.description)})
          ],
      module: {
        rules: [{
          loader: 'babel-loader',
          exclude: [path.resolve(__dirname, 'node_modules'), path.resolve(__dirname, 'test', 'data')],
          query: {
            presets: ['env'],
            plugins: [
              "transform-decorators-legacy", ["babel-plugin-transform-builtin-extend", {
                globals: ["Error"]
              }]
            ]
          },
        }]
      }
    },
    reporters: ['mocha'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    browsers: ['ChromeHeadless'],
    autoWatch: false,
    singleRun: true,
    concurrency: Infinity
  });
};
