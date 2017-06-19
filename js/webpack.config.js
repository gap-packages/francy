module.exports = {
  entry: './src/francy.js',
  output: {
    filename: 'francy.bundle.js',
    libraryTarget: "amd"
  },
  devtool: 'inline-source-map',
  module: {
    loaders: [
      {
        loader: 'babel-loader'
      }
    ]
  }
};