const webpack = require('webpack');
const puppeteer = require('puppeteer');
process.env.CHROME_BIN = puppeteer.executablePath();

module.exports = config => {
  let test_files = 'src/__test__/*.js';
  config.set({
    frameworks: ['webpack', 'mocha', 'chai'],
    preprocessors: {
      'src/**/*.js': ['webpack', 'coverage']
    },
    files: [test_files],
    plugins: ['karma-chrome-launcher', 'karma-mocha-reporter', 'karma-webpack', 'karma-mocha', 'karma-chai', 'karma-coverage'],
    webpack: {
      mode: 'development',
      stats: {
        colors: false,
        hash: true,
        timings: true,
        assets: true,
        chunks: true,
        chunkModules: true,
        modules: true,
        children: true,
      }, experiments: {
        topLevelAwait: true
      }, output: {
        libraryTarget: 'umd',
      }, plugins: [
        new webpack.DefinePlugin({VERSION: "2", FRANCY_DESC: "some description"}),
        new webpack.BannerPlugin("Disclaimer")
      ],
      module: {
        rules: [{
          test: /\.js$/,
          include: [/src/],
          exclude: [/node_modules/, /bower_components/, /dist/, /__test__/],
          use: {
            loader: 'babel-loader', options: {
              plugins: [
                ['@babel/plugin-proposal-decorators', {'legacy': true}],
                ['@babel/plugin-transform-classes', {globals: ['Error']}]
              ]
            }
          }
        }, {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }]
      }
    },
    reporters: ['coverage', 'mocha'],
    coverageReporter: {
      reporters: [{type: 'lcovonly', subdir: '.'}]
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    browsers: ['ChromeHeadlessNoSandbox'],
    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox']
      }
    },
    autoWatch: false,
    singleRun: true,
    concurrency: Infinity
  });
}
