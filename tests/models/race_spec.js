var Race = require('../../models/race');

describe('Race: ', function() {

  var race;

  beforeEach(function() {
    race = new Race();
  });

  describe('getStatus ', function() {

    it('returns race data if it exists', function(){
      raceData = {test: 'Test'};
      var callback = function(){};
      var actualRaceData = race.getStatus();
      expect(actualRaceData).toEqual(raceData);
    });

    it('gets the race data from the file if it does not exist', function(){
      raceData = null;
      var raceTestData = {test: 'Test'};
      var callback = function(){};
      spyOn(race, 'getRaceData').andReturn(raceTestData);

      var actualRaceData = race.getStatus();

      expect(race.getRaceData).toHaveBeenCalled();
      expect(actualRaceData).toEqual(raceTestData);
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

});
