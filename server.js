var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.dev');

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

//For cloud9 use:
var PORT = process.env.PORT, IP = process.env.IP;

//For local use:
// var PORT = 1801, IP = 'localhost';

app.listen(PORT, IP, function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log("Servidor iniciado en: http://"+IP+":"+PORT);
});
