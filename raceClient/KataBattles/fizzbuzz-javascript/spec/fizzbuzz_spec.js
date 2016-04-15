// FizzBuzz Rules:
// 1.) Any number not divisble by 3, 5 or 15 returns the input number
// 2.) Any number divisible by 3 returns "Fizz"
// 3.) Any number divisible by 5 returns "Buzz"
// 4.) Any number divisible by 15 returns "FizzBuzz"

describe('When FizzBuzz is given a value: ', function(){

  var fizzbuzz;

  beforeEach(function(){
    fizzbuzz = new Fizzbuzz();
  });

  describe('convert returns', function(){

    it('the number given when it is not divisible by 3, 5 or 15', function(){
      expect(fizzbuzz.convert(1)).toEqual(1)
    });
  });


});
