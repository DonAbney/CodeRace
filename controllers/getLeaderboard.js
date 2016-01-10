/* GET leaderboard listing. */
function getLeaderboard(req, res) {
  var options = {
    root: './views/',
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  };

  res.sendFile('race.html', options);
}

module.exports = getLeaderboard;
