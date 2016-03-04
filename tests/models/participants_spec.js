var Participants = require('../../models/participants');

describe('Participants: ', function() {

  describe('newRacer ', function() {

    it('appends racer data to the participants file', function() {
      var req;
      fs = require('fs');
      req = {
        "body": {
          "name": "numfiver",
          "email": "five@email2"
        }
      };

      var person = JSON.stringify({racer: {name: req.body.name, email: req.body.email}});

      spyOn(fs, 'appendFile');

      Participants.newRacer(req);

      expect(fs.appendFile).toHaveBeenCalledWith(jasmine.any(String), person);
    });

  });
});
