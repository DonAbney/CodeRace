var getSignup = require('../../controllers/getSignup');
var submitSignup = require('../../controllers/submitSignup')

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

  describe('submit', function() {
    it('replies to request with the success page', function() {
      var req, res, spy;
      req = {"params":{"name":"numfiver","email":"five@email2"}};
      res = {sendFile: function(){}};
      spyOn(res, 'sendFile');

      submitSignup(req, res);

      expect(res.sendFile).toHaveBeenCalledWith('success.html', jasmine.any(Object));
    });

    it('appends racer data to the participants file', function(){
      var req, res, spy;
      fs = require('fs');
      req = {"params":{"name":"numfiver","email":"five@email2"}};
      res = {sendFile: function(){}};
      spyOn(fs, 'appendFile');

      submitSignup(req, res);

      expect(fs.appendFile).toHaveBeenCalledWith('/Users/matthewhouse/dev/CodeRace/participants.json', jasmine.any(String));

    });

  });

});
