var getStatus = require('../../controllers/getStatus');

describe('Status: ', function() {

  describe('GET ', function() {

    it('replies to requests with the race status data', function(){
      var req,res,spy;
      req = res = {};
      Race = require('../../models/race');
      spyOn(Race, 'getStatus');

      getStatus(req, res);

      expect(Race.getStatus).toHaveBeenCalledWith(jasmine.any(Function));
    });

  });
});
