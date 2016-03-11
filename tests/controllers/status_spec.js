var getStatus = require('../../controllers/getStatus');
var Race = require('../../models/race');

describe('Status: ', function() {

  describe('GET ', function() {

    it('replies to requests with the race status data', function(){
      var req,res,spy;
      req = res = {};
      var race = new Race();
      spyOn(race, 'getStatus');

      race.getStatus(req, res);

      expect(race.getStatus).toHaveBeenCalledWith(jasmine.any(Object), jasmine.any(Object));
    });

  });
});
