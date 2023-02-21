const currentPackageConfig = require('./package.json');
const WebpackConfig = require('../build-config/webpack');

module.exports = WebpackConfig({currentPackageConfig: currentPackageConfig, modulePath: __dirname});
