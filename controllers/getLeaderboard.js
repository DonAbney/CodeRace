/* GET leaderboard listing. */
function getLeaderboard(req, res) {
  res.sendfile('race.html');
}

module.exports = getLeaderboard;
