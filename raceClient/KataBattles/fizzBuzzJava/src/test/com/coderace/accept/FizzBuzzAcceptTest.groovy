package com.coderace.accept

import kataBattle.fizzbuzz.*
import spock.lang.*

class FizzBuzzAcceptTest extends Specification {

  @Unroll
  def "#numberToFizzBuzz should return #expectedReturnValue"() {

    expect:
      expectedReturnValue.toString() == actualReturnValue

    where:
      expectedReturnValue << (1..100).collect{((it%3==0?'Fizz':'')+(it%5==0?'Buzz':'')) ?: it}
      actualReturnValue << (1..100).collect{FizzBuzz.process(it)}
      numberToFizzBuzz << (1..100).collect()

  }

}
