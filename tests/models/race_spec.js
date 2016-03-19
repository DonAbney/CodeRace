var Race = require('../../models/race');

describe('Race: ', function() {

  var race;

  beforeEach(function() {
    race = new Race();
  });

  describe('getStatus ', function() {

    it('returns race data if it exists', function(){
      global.raceData = {test: 'Test'};
      // var callback = function(){};
      var actualRaceData = race.getStatus();
      expect(actualRaceData).toEqual(raceData);
    });

    it('gets the race data from the file if it does not exist', function(){
      global.raceData = undefined;
      spyOn(race, 'getRaceData');

      race.getStatus();

      expect(race.getRaceData).toHaveBeenCalledWith(jasmine.any(Function));
    });

  });

  describe('getRaceData', function(){

    it('reads the race data',function(){
      fs = require("fs");
      var callback = function(){

      };
      spyOn(fs, 'readFile');

      race.getRaceData(callback);

      expect(fs.readFile).toHaveBeenCalledWith(jasmine.any(String), 'utf8', jasmine.any(Function));

    });

  });

  describe('setRacerInfo', function(){

    it('Updates the racer data and writes to the race.json file', function(){
      global.raceData = {
        "racer1": {
          "screenName": "RacerBeforeTest",
          "percentage": 10
        },
        "racer2": {
          "screenName": "Racer2BeforeTest",
          "percentage": 20
        }
      };

      var req = {
        "body": {
          "racer": "1",
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

    it('Reads the raceData from the race.json file if the global is empty', function() {
      global.raceData = undefined;

      var req = {
        "body": {
          "racer": "1",
          "screenName": "RacerAfterTest",
          "email": "test@test.com"
        }
      };

      fs = require("fs");
      spyOn(fs, 'writeFile');
      spyOn(Race.prototype, 'getRaceData').andCallFake(function() {
        global.raceData = {
           "racer1" : {
              "screenName": "racer1",
              "percent" : 0
           }
         };
      });

      race.setRacerInfo(req);

      expect(Race.prototype.getRaceData).toHaveBeenCalled();

    });

  });

  describe('setRacerProgress', function(){

    it('Updates the racer progress and writes to the race.json file', function(){
      global.raceData = {
        "racer1": {
          "screenName": "RacerBeforeTest",
          "percentage": 10
        },
        "racer2": {
          "screenName": "Racer2BeforeTest",
          "percentage": 20
        }
      };

      var req = {
        "params": {
          "racer": "racer1",
          "percentage": 40
        }
      };

      fs = require("fs");
      spyOn(fs, 'writeFile');

      race.setRacerProgress(req);

      expect(global.raceData.racer1.percentage).toEqual(req.params.percentage);
      expect(fs.writeFile).toHaveBeenCalledWith(jasmine.any(String), JSON.stringify(global.raceData));
    });

  });

});
