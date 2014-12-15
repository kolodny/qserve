#!/usr/bin/env node

var qserve = require('../lib');
var resolve = require('path').resolve
var program = require('commander');

program
  .version(require('../package.json').version)
  .usage('[options] [dir]')
  .option('-p, --port <port>', 'specify the port [3000]', Number, 3000)
  .parse(process.argv);

var path = resolve(program.args.shift() || '.');

qserve({
  port: program.port,
  path: path
});
