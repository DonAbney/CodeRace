// Unit Tests
describe('Roman Numerals', function() {
  //var romanNumerals = require('./lib/rn.js');
  var numerals;

  beforeEach(function() {
    numerals = new romanNumerals();
  });

  it('translates I to 1', function(){
  	expect(numerals.convert('I')).toEqual(1)
  });

});
