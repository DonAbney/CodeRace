var http = require('http');
var getLeaderboard = require('../../controllers/getLeaderboard');

describe('Leaderboard: ', function() {

  describe('GET ', function() {

    it('replies to requests with the leaderboard page', function(){
      var req,res,spy;
      req = {};
      res = {sendfile: function(){}};
      spyOn(res, 'sendfile');

      getLeaderboard(req, res);

      expect(res.sendfile).toHaveBeenCalledWith('race.html');
    });

  });
});
