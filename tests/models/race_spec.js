var Race = require('../../models/race');

describe('Race: ', function() {

  describe('getStatus ', function() {

    it('reads race data and provides the callback', function(){
      fs = require("fs");
      var callback = function(){};
      spyOn(fs, 'readFile');

      Race.getStatus(callback);

      expect(fs.readFile).toHaveBeenCalledWith(jasmine.any(String), 'utf8', jasmine.any(Function));
    });

  });
});
