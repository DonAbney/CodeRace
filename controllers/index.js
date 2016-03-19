var express = require('express')
router = express.Router()

router.use('/signup', require('./signupRouter'))
router.use('/leaderboard', require('./leaderboardRouter'))
router.use('/', require('./leaderboardRouter'))
router.use('/submitSignup', require('./submitSignupRouter'))
router.use('/status', require('./getStatus'))
router.use('/percent/:racer/:percentage', require('./submitStatus'))

module.exports = router
