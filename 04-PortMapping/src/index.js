var express = require('express');
var os = require("os");

var app = express();
var hostname = os.hostname();

app.use(express.static('public'));

function exitOnSignal(signal) {
  process.on(signal, function() {
    process.exit(1);
  });
}

exitOnSignal('SIGINT');
exitOnSignal('SIGTERM');

app.get('/', function (req, res) {
  res.send('<html> \
    <head> \
        <title>Docker</title> \
        <link rel="stylesheet" type="text/css" href="css/style.css"> \
    </head> \
    <body> \
        <h1>Hello from ' + hostname + '</h1> \
    <body/> \
</html>');
});

var port = process.env.PORT || 3000;

app.listen(port);

console.log('Running on http://localhost:' + port);