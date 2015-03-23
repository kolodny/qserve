qserve
===

usage:

```js
var qserve = require('qserve');

var server = qserve({
  port: 8080,
  path: __dirname,
  debug: false,
  openBrowser: true
});
```

shell usage:

```bash
$ qserve --help

  Usage: qserve [options] [dir]

  Options:

    -h, --help         output usage information
    -V, --version      output the version number
    -p, --port <port>  specify the port [3000]
    -s, --silent       hide logging info
    -j, --just-serve   don't open browser
```
