var http = require('http');
var express = require('express');
var stream = require('stream');

var app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.use((req, res) => {
    var str = new stream.Writable();

    res.setHeader('Content-disposition', 'attachment; filename="str"');
    res.end('tekst');
});
http.createServer(app).listen(3000);