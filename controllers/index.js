var express = require('express')
router = express.Router()

router.use('/signup', require('./signupRouter'))
router.use('/leaderboard', require('./leaderboardRouter'))
router.use('/', require('./leaderboardRouter'))
router.use('/submitSignup', require('./submitSignupRouter'))

module.exports = router
