var express = require('express');
var router = express.Router();

var collatzApp = require('../app/app.collatz'); 

router.post('/', collatzApp.index);

module.exports = router;