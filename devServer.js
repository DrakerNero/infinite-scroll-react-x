var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.dev');

const app = express()
const compiler = webpack(config)

const DEV_FOLDER = 'dev'

app.use(require('webpack-dev-middleware')(compiler, { // eslint-disable-line import/no-extraneous-dependencies
  // noInfo: true,
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  noInfo: false,
  compress: true,
  stats: {
    assets: true,
    colors: true,
    version: false,
    hash: false,
    timings: false,
    chunks: false,
    chunkModules: false,
  },
  quiet: false,
  inline: false,
}))

app.use(require('webpack-hot-middleware')(compiler)); // eslint-disable-line import/no-extraneous-dependencies

// app.use('/img', express.static(DEV_FOLDER + '/img'));
app.use('/img', express.static(`${DEV_FOLDER}/img`))
app.get('*', (req, res) => {
  // res.sendFile(path.join(__dirname, DEV_FOLDER + '/index.html'));
  res.sendFile(path.join(__dirname, `${DEV_FOLDER}/index.html`))
})

app.listen(3000, (err) => {
  if (err) {
    console.log(err)
    return
  }

  console.log('Listening at http://localhost:3000')
});
