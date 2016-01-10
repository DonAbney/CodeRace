var express = require('express');
var router = express.Router();
var getSignup = require('./getSignup');

router.get('/', getSignup);

module.exports = router;
