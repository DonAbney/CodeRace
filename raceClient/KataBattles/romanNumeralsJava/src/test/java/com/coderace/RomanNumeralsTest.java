package com.coderace;

import org.junit.Test;
import static org.junit.Assert.*;

public class RomanNumeralsTest {

  @Test
  public void shouldReturnOneForI() {
    assertEquals(1, RomanNumerals.convert("I"));
  }  
}
