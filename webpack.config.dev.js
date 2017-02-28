var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    bundle: [
      // necessary for hot reloading with IE:
      'babel-polyfill',
      // 'eventsource-polyfill',
      // 'react-hot-loader/patch',
      // listen to code updates emitted by hot middleware:
      'webpack-hot-middleware/client',
      './dev/index',
    ],
  },
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loaders: ['babel-loader'], exclude: '/node_modules/', include: __dirname },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(`${process.env.NODE_ENV}`),
      },
    }),
  ],
}
