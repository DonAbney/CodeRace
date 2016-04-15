function FizzbuzzAccept(){

  FizzbuzzAccept.prototype.isDivisibleByThree = function(number){
    return number % 3 === 0;
  };

  FizzbuzzAccept.prototype.isDivisibleByFive = function(number){
    return number % 5 === 0;
  };

  FizzbuzzAccept.prototype.isDivisibleByFifteen = function(number){
    return number % 15 === 0;
  };

  FizzbuzzAccept.prototype.convert = function(number){
    if (this.isDivisibleByFifteen(number)) return "FizzBuzz";
    if (this.isDivisibleByThree(number)) return "Fizz";
    if (this.isDivisibleByFive(number)) return "Buzz";
    return number;
  };
}
