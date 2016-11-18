var mongoose = require('mongoose');
var Show = mongoose.model('Show');

//POST - Insert a new register
exports.add = function(req, res) {
 console.log('POST');
 console.log(req.body);
 var show = new Show({
 show: req.body.show
 });
 show.save(function(err, show) {
 if(err) return res.send(500, err.message);
 Show.find(function(err, clients) {
 if(err) res.send(500, err.message);
 console.log('GET /clients')
 res.status(200).jsonp(clients);
 });
 });
};


