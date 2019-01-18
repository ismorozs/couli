const path = require('path');

module.exports = {
  entry: './src/main.js',
  devtool: 'eval-source-map',
  devServer: {
    contentBase: './dist'
  },
  output: {
    filename: 'couli.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'Couli',
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
    ]
  }
};
