var Race = require('../../models/race');

describe('Race: ', function() {

  describe('getStatus ', function() {
    xit('reads race data', function(){
      expect(false).toBeTruthy();
    });

    it('invokes the callback', function(done){
      var callWasMade = false;
      var callback = function(err, data) {
        callWasMade = true;
      };

      Race.getStatus(callback);

      expect(callWasMade).toBe(true);
      done();
    });

  });
});
