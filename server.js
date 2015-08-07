// server.js

var express = require('express'),
    path = require('path'),
    app = express(),
    router = express.Router(),
    config = require('./config'),
    port = config.port,
    bodyParser = require('body-parser');

// Make sure to include the JSX transpiler
require("node-jsx").install();

// body parser
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

// Include static assets. Not advised for production
app.use(express.static(path.join(__dirname, 'public')));
// Set view path
app.set('views', path.join(__dirname, 'views'));
// set up ejs for templating. You can use whatever
app.set('view engine', 'ejs');

//main-routes
app.get('/', function(req, res) {
    res.send('<h1>Freedom React App! </h1><a href="/auth">Login</a>');
});
app.use('/dashboard', require('./server/routes/user'));
app.use('/auth', require('./server/routes/auth'));
app.use('/public', express.static('public'));

app.listen(port);
console.log('Server is Up and Running at Port : ' + port + ' \n Project Directory: '  + config.appRoot);