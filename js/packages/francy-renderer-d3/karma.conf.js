const webpack = require('webpack');
const fPackage = require('./package.json');

module.exports = function(config) {
  config.set({
    frameworks: [
      'mocha', 
      'chai'
    ],
    preprocessors: {
      './src/**/*.js': ['webpack']
    },
    files: [
      '../../node_modules/@babel/polyfill/dist/polyfill.js',
      './src/test/**/*.test.js'
    ],
    exclude: [
      './src/test/data/'
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
