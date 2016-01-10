var getSignup = require('../../controllers/getSignup');

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
});
