var express = require('express');
var router = express.Router();
var getSignup = require('./getStatus');

router.get('/', getStatus);

module.exports = router;
