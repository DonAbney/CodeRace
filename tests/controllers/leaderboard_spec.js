var getLeaderboard = require('../../controllers/getLeaderboard');

describe('Leaderboard: ', function() {

  describe('GET ', function() {

    it('replies to requests with the leaderboard page', function(){
      var req,res,spy;
      req = {};
      res = {sendFile: function(){}};
      spyOn(res, 'sendFile');

      getLeaderboard(req, res);

      expect(res.sendFile).toHaveBeenCalledWith('race.html', jasmine.any(Object));
    });

  });
});
