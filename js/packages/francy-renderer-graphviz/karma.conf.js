const webpack = require('webpack');
const fPackage = require('./package.json');

module.exports = function (config) {
  config.set({
    frameworks: [
      'mocha',
      'chai'
    ],
    preprocessors: {
      './src/**/*.js': ['webpack', 'coverage']
    },
    files: [
      '../../node_modules/@babel/polyfill/dist/polyfill.js',
      './src/**/*.js'
    ],
    exclude: [
      './src/__test__/data/'
    ],
    plugins: [
      'karma-chrome-launcher',
      'karma-mocha-reporter',
      'karma-webpack',
      'karma-mocha',
      'karma-chai',
      'karma-coverage'
    ],
    webpack: {
      mode: 'development',
      target: 'web',
      plugins: [
        new webpack.DefinePlugin({
          VERSION: JSON.stringify(fPackage.version),
          FRANCY_DESC: JSON.stringify(fPackage.description)
        })
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
    reporters: ['coverage', 'mocha'],
    coverageReporter: {
      reporters: [
        { type: 'lcovonly', subdir: '.' }
      ]
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    browsers: ['ChromeHeadless'],
    autoWatch: false,
    singleRun: true,
    concurrency: Infinity
  });
};
