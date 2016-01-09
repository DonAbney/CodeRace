var express = require('express');
var router = express.Router();
var getLeaderboard = require('./users/getLeaderboard');

router.get('/', getLeaderboard);

module.exports = router;
