var getSignup = require('../../controllers/getSignup');
var doSignup = require('../../controllers/doSignup')

describe('Signup: ', function() {

  describe('GET ', function() {

    it('replies to requests with the signup page', function(){
      var req,res,spy;
      req = {};
      res = {sendFile: function(){}};
      spyOn(res, 'sendFile');

      getSignup(req, res);

      expect(res.sendFile).toHaveBeenCalledWith('signup.html', jasmine.any(Object));
    });

  });

  describe('DO', function() {
    it('replies to request with the success page', function() {
      var req, res, spy;
      req = {};
      res = {sendFile: function(){}};
      spyOn(res, 'sendFile');

      doSignup(req, res);

      expect(res.sendFile).toHaveBeenCalledWith('success.html', jasmine.any(Object));
    });

  });

});
