const express = require('express');
const app = express();
const bs = require('browser-sync');
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/app'));

app.get('/', function(req, res) {
  res.sendFile('/index.html');
});

app.listen(port, function () {
  bs({
    proxy: 'localhost:' + port,
    files: ['app/**/*.*']
  });
});
