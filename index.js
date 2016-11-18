var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var methodOverride = require("method-override");
var app = express();
//Conection database

mongoose.connect('mongodb://localhost/shows', function(err, res) {
 if(err) throw err;
 console.log('Connected to Database');
});


// Middlewares
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json()); 
app.use(methodOverride());

var router = express.Router();



app.use(router);

//Importarmos modelos y controladores

var models = require('./models/show')(app, mongoose);
var clientController = require('./controllers/show');

app.use(router);


var api = express.Router();

api.route('/shows').post(clientController.add);

app.use('/api',api);
// Start server
app.listen(3000, function() {
 console.log("Node server running on http://localhost:3000");
});