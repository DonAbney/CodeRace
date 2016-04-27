describe("Prime Factor Analyzer", function () {
    beforeEach(function () {

    });

    it("returns empty when given 1", function() {
        var expected = [];

        expect(primeFactors(1)).toEqual(expected);
    });

    it("returns [2] when given 2", function() {
        var expected = [2];

        expect(primeFactors(2)).toEqual(expected);
    });

    it("returns [3] when given 3", function() {
        var expected = [3];

        expect(primeFactors(3)).toEqual(expected);
    });

    it("returns [2,2] when given 4", function() {
        var expected = [2,2];

        expect(primeFactors(4)).toEqual(expected);
    });

    it("returns [5] when given 5", function() {
        var expected = [5];

        expect(primeFactors(5)).toEqual(expected);
    });

    it("returns [2,3] when given 6", function() {
        var expected = [2,3];

        expect(primeFactors(6)).toEqual(expected);
    });

    it("returns [7] when given 7", function() {
        var expected = [7];

        expect(primeFactors(7)).toEqual(expected);
    });

    it("returns [2,2,2] when given 8", function() {
        var expected = [2,2,2];

        expect(primeFactors(8)).toEqual(expected);
    });

    it("returns [3,3] when given 9", function() {
        var expected = [3,3];

        expect(primeFactors(9)).toEqual(expected);
    });

    it("returns [2,5] when given 10", function() {
        var expected = [2,5];

        expect(primeFactors(10)).toEqual(expected);
    });


    it("returns [2,2,2,3,5,17] when given 2040", function(){
      var expected = [2,2,2,3,5,17];

      expect(primeFactors(2040)).toEqual(expected);
    })
});
