var express = require('express')
  , router = express.Router()

router.use('/signup', require('./signupRouter'))
router.use('/leaderboard', require('./leaderboardRouter'))

router.get('/', function(req, res) {
  res.send('Sorry Playa');
})

module.exports = router
