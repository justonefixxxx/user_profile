'use strict';

var express = require('express');
var app = express();
var bs = require('browser-sync');
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/app'));

app.get('/', function (req, res) {
  res.sendFile('/index.html');
});

app.listen(port, function () {
  bs({
    proxy: 'localhost:' + port,
    files: ['app/**/*.*']
  });
});

//# sourceMappingURL=server-compiled.js.map