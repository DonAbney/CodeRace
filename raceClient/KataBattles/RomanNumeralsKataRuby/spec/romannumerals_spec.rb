#romannumerals_spec
require './lib/romannumerals'

describe "Roman Numerals" do

  before(:each) do
    @roman = RomanNumeral.new
  end


  context "Converting Roman Numerals to number - " do
    it "should convert I to 1" do
      @roman.convert("I").should == 1
    end

    it "should convert II to 2" do
      @roman.convert("II").should == 2
    end

    it "should convert III to 3" do
      @roman.convert("III").should == 3
    end

    it "should convert IV to 4" do
      @roman.convert("IV").should == 4
    end

    it "should convert V to 5" do
      @roman.convert("V").should == 5
    end

    it "should convert VI to 6" do
      @roman.convert("VI").should == 6
    end

    it "should convert VII to 7" do
      @roman.convert("VII").should == 7
    end

    it "should convert VIII to 8" do
      @roman.convert("VIII").should == 8
    end

    it "should convert IX to 9" do
      @roman.convert("IX").should == 9
    end

    it "should convert X to X" do
      @roman.convert("X").should == 10
    end


  end
end
