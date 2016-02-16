var express = require('express');
var router = express.Router();
var submitSignup = require('./submitSignup');

router.post('/', submitSignup);

module.exports = router;
