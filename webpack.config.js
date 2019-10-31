const path = require('path');

var config = {
  entry: './src/Component.js',
  devServer: {
    contentBase: './dist'
  },
  output: {
    filename: 'couli.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'Couli',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
    ]
  }
};

module.exports = (env = {}, argv = {}) => {
  
  if (argv.mode === 'development') {
    config.devtool = env.NO_SOURCE_MAP ? false : 'inline-source-map';
  }

  if (argv.mode === 'production') {
    config.output.filename = 'couli.min.js';
  }

  return config;
};
