describe('When FizzBuzz is given a value: ', function(){

  var fizzbuzz;
  var fizzbuzzAccept;

  beforeEach(function(){
    fizzbuzz = new Fizzbuzz();
    fizzbuzzAccept = new FizzbuzzAccept();
  });

  var testParams = new Array(100);
  var expectedResult;

  for (var i = 0; i < testParams.length; i++) {
    (function(i) {
      it('knows how to process ' + (i+1), function () {
        expectedResult = fizzbuzzAccept.convert(i+1);
        expect(fizzbuzz.convert(i+1)).toEqual(expectedResult);
      });
    })(i);
};

});
