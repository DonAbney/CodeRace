// Acceptance tests
describe('Roman Numerals', function() {
  //var romanNumerals = require('./lib/rn.js');
  var numerals;

  beforeEach(function() {
    numerals = new romanNumerals();
  });

  it('translates I to 1', function(){
  	expect(numerals.convert('I')).toEqual(1)
  });

  it('translates II to 2', function(){
  	expect(numerals.convert('II')).toEqual(2)
  });

  it('translates III to 3', function(){
  	expect(numerals.convert('III')).toEqual(3)
  });

  it('translates IV to 4', function(){
  	expect(numerals.convert('IV')).toEqual(4)
  });

  it('translates V to 5', function(){
  	expect(numerals.convert('V')).toEqual(5)
  });

  it('translates VI to 6', function(){
  	expect(numerals.convert('VI')).toEqual(6)
  });

  it('translates VII to 7', function(){
  	expect(numerals.convert('VII')).toEqual(7)
  });

  it('translates VIII to 8', function(){
  	expect(numerals.convert('VIII')).toEqual(8)
  });

  it('translates IX to 9', function(){
  	expect(numerals.convert('IX')).toEqual(9)
  });

  it('translates X to 10', function(){
  	expect(numerals.convert('X')).toEqual(10)
  });

});
