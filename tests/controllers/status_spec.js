var getStatus = require('../../controllers/getStatus');
var Race = require('../../models/race');

describe('Status: ', function() {

  describe('GET ', function() {

    it('replies to requests with the race status data', function(){
      var req,res,spy;
      req = res = {};
      var race = new Race();
      var testRaceStatus = {test: 'test'}
      spyOn(race, 'getStatus').andReturn(testRaceStatus);

      var actualRaceStatus = race.getStatus(req, res);

      expect(race.getStatus).toHaveBeenCalledWith(jasmine.any(Object), jasmine.any(Object));
      expect(testRaceStatus).toEqual(actualRaceStatus);
    });

  });
});
