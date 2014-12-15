// Requirements
var http = require('http');
var path = require('path');
var connect = require('connect');
var index = require('serve-index');
var stc = require('serve-static');

module.exports = function(options) {
  options = options || {};
  var port = options.port || 3000;
  var publicPath = path.resolve(options.path || '.');

  var app = connect()
    .use(function(req, res, next) {
      if (options.debug) {
        console.log(req.method, req.url);
      }
      next();
    })
    .use(index(publicPath, {view: 'details'}))
    .use(stc(publicPath))
    ;

  var server = http.createServer(app).listen(port, function() {
    if (options.debug) {
      var address = server.address();
      var serverHostname = 'localhost';
      if (address.address !== '0.0.0.0' && address.address !== '::')  serverHostname = address.address;
      var serverPort = address.port;
      var serverLocation = "http://" + serverHostname + ":" + serverPort + "/";
      console.log(serverLocation + " serving: " + publicPath);
    }
  });

  return server;
};
