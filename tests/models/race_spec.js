var Race = require('../../models/race');

describe('Race: ', function() {

  var race;

  beforeEach(function() {
    race = new Race();
  });

  describe('getStatus ', function() {

    it('returns race data if it exists', function(){
      global.raceData = {test: 'Test'};
      var callback = function(){};
      var actualRaceData = race.getStatus();
      expect(actualRaceData).toEqual(raceData);
    });

    it('gets the race data from the file if it does not exist', function(){
      global.raceData = undefined;
      spyOn(race, 'getRaceData');

      race.getStatus();

      expect(race.getRaceData).toHaveBeenCalled();
    });

  });

  describe('getRaceData', function(){

    it('reads the race data',function(){
      fs = require("fs");
      var callback = function(){};
      spyOn(fs, 'readFile');

      race.getRaceData();

      expect(fs.readFile).toHaveBeenCalledWith(jasmine.any(String), 'utf8', jasmine.any(Function));

    });

  });

  describe('setRacerInfo', function(){

    it('Updates the racer data and writes to the race.json file', function(){
      global.raceData = {
        "racer1": {
          "screenName": "RacerBeforeTest",
          "percent": 10
        },
        "racer2": {
          "screenName": "Racer2BeforeTest",
          "percent": 20
        }
      };

      var req = {
        "body": {
          "racer": "racer1",
          "screenName": "RacerAfterTest",
          "email": "test@test.com"
        }
      };

      fs = require("fs");
      spyOn(fs, 'writeFile');

      race.setRacerInfo(req);

      expect(global.raceData.racer1.screenName).toEqual(req.body.screenName);
      expect(fs.writeFile).toHaveBeenCalledWith(jasmine.any(String), JSON.stringify(global.raceData));
    });

  });

});
