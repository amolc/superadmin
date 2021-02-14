var express = require('express');
var app = express();
var path = require('path');
var serveStatic = require('serve-static');
var bodyParser = require("body-parser");

var isDev = app.get('env') === 'development';

var expressNunjucks = require('express-nunjucks');
var routes = require('./public/api/routes.js');
app.set('views', __dirname + '/public');


var njk = expressNunjucks(app, {
    watch: isDev,
    noCache: isDev,
    autoescape: false,
    tags: {
        blockStart: '{%',
        blockEnd: '%}',
        commentStart: '{#',
        commentEnd: '#}',
        variableStart: '{$',
        variableEnd: '$}'
    }
});

// handle cors
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header( "Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH,OPTIONS" );
    res.header("Access-Control-Allow-Credentials", false);
    next();
});
  
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json({limit: "50mb",extended: true,type: "application/json"}));
app.use(bodyParser.urlencoded({limit: "50mb",extended: true,type: "application/x-www-form-urlencoding"}));
app.use(bodyParser.json({type: "application/json"}));
app.use(bodyParser.raw({limit: "50mb" }));


// app.use('/', express.static(__dirname + '/admin/dist/admin'));
// app.use('/', express.static(__dirname + '/public'));
app.use('/docs', express.static(__dirname + '/apidoc'));
app.use('/assets', express.static(__dirname + '/assets'));

app.get('//', routes.index);
app.get('/index.html', routes.index);
app.get('/getallusers.html', routes.getallusers);
app.get('/getallparcels.html', routes.getallparcels);
app.get('/newuser.html', routes.newuser);
app.get('/bookingform.html', routes.bookingform);


global.appRoot = path.resolve(__dirname);
app.listen(5001);
console.log('server is started at port: 5001');
//module.exports = app




