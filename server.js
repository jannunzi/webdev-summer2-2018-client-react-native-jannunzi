var express = require('express');
var app = express();

var applications = [
  {title: 'Checkers', _id: '123'},
  {title: 'Asteroids', _id: '234'},
  {title: 'Centepide', _id: '345'}
];

app.get('/api/application', function(req, res){
  res.json(applications);
});

app.get('/api/application/:aid', function(req, res){
  res.json(
    applications.filter(application => application._id == req.params['aid'])[0]
  );
});

app.listen(3000);
