var express = require('express');
var app = require('./app.js');

const port = process.env.PORT || 5432;

var server = app.app.listen(port, function(){
    console.log('Web App Hosted at http://localhost:%s', port)
});
