var express = require('express');
var app = express();
var port = process.env.PORT || 5000;

app.use(express.static('server/public'));

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(port, function(){
    console.log('listening on port ', port);
})

