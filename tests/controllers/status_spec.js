var getStatus = require('../../controllers/getStatus');

describe('Status: ', function() {

  describe('GET ', function() {

    it('replies to requests with the race status data', function(){
      var req,res,spy;
      req = {};
      res = {end: function(){}};
      spyOn(res, 'end');

      getStatus(req, res);

      expect(res.end).toHaveBeenCalledWith(jasmine.any(Object));
    });

  });
});
