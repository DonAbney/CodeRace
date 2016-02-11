var express = require('express')
router = express.Router()

router.use('/signup', require('./signupRouter'))
router.use('/leaderboard', require('./leaderboardRouter'))
router.use('/', require('./leaderboardRouter'))

module.exports = router
