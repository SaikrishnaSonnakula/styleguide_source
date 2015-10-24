var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'app/scripts/index.js'),
  output: {
    path: path.resolve(__dirname, 'target/development'),
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel'
    }, {
      test: /\.css$/,
      loader: 'style!css'
    }, {
      test: /\.scss$/,
      loader: 'style!css!resolve-url!sass'
    }, {
      test: /\.(eot|svg|ttf|woff|png)/,
      loader: 'url?limit=10000'
    }, {
      test: require.resolve('./vendor/fixedsticky'),
      loader: 'imports?jQuery=jquery'
    }]
  },
  resolve: {
    root: [path.resolve(__dirname, 'vendor')],
  }
};
