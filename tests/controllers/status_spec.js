var getStatus = require('../../controllers/getStatus');
var submitStatus = require('../../controllers/submitStatus');
var Race = require('../../models/race');

describe('Status: ', function() {

  describe('GET ', function() {

    it('replies to requests with the race status data', function(){
      var req,res;
      req = res = {};
      res.end = function() {};
      var testRaceStatus = {test: 'test'}
      spyOn(Race.prototype, 'getStatus').andReturn(testRaceStatus);
      spyOn(res, 'end');

      getStatus(req, res);

      expect(Race.prototype.getStatus).toHaveBeenCalled();
      expect(res.end).toHaveBeenCalledWith(JSON.stringify(testRaceStatus));
    });

  });

  describe('PUT ', function() {

    it('makes call to Race model for status update', function(){
      var req = {
        "params": {
          "racer": "racer1",
          "percentage": 40
        }
      };

      var res = {};
      res.end = function() {};
      var testRaceStatus = {test: 'test'}

      spyOn(Race.prototype, 'setRacerProgress');
      spyOn(res, 'end');

      submitStatus(req, res);

      expect(Race.prototype.setRacerProgress).toHaveBeenCalledWith(req);
      expect(res.end).toHaveBeenCalledWith(jasmine.any(String));
    });

  });
});
