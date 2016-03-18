var getSignup = require('../../controllers/getSignup');
var submitSignup = require('../../controllers/submitSignup');
var participants = require('../../models/participants');

describe('Signup: ', function() {

  describe('GET ', function() {

    it('replies to requests with the signup page', function() {
      var req, res;
      req = {};
      res = {
        sendFile: function() {}
      };
      spyOn(res, 'sendFile');

      getSignup(req, res);

      expect(res.sendFile).toHaveBeenCalledWith('signup.html', jasmine.any(Object));
    });

  });

  describe('POST', function() {
    it('replies to request with the success page', function() {
      var req, res;
      req = {
        "body": {
          "name": "numfiver",
          "email": "five@email2"

        }
      };
      res = {
        sendFile: function() {}
      };
      spyOn(res, 'sendFile');

      submitSignup(req, res);

      expect(res.sendFile).toHaveBeenCalledWith('success.html', jasmine.any(Object));
    });

    it('calls the necessary methods in participants', function() {
      var res = {
        sendFile: function() {}
      };
      var req = {
        "body": {
          "name": "numfiver",
          "email": "five@email2"
        }
      };

      spyOn(participants, 'newRacer');
      submitSignup(req, res);

      expect(participants.newRacer).toHaveBeenCalledWith(req);
    });

    it('Calls the necessary methods in race.js', function() {
      // DO Stuff
    });

  });

});
