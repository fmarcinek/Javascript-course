var http = require('http');
var express = require('express');

var app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({extended:true}));

app.get('/', (req,res) => {
    res.render('index', {name: '', surname: '', subject: ''});
});

app.post('/', (req,res) => {
    var name = req.body.name;
    var surname = req.body.surname;
    var subject = req.body.subject;
    if (name == '' || surname == '' || subject == '') {
        res.render('index', {name: '', surname: '', subject: ''});
    }

    var points = [];
    for (let i = 1; i <= 10; i++) {
        points.push(req.body[`zad${i}`]);
    }
    points = points.map(p => {
        if (p == '') return 0;
        return parseInt(p);
    });

    res.render('print', {name: name, surname: surname, subject: subject, points: points});
});

http.createServer(app).listen(3000);