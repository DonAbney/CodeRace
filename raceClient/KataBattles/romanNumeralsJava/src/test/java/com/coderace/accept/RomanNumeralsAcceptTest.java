package com.coderace.accept;

import com.coderace.RomanNumerals;
import org.junit.Test;
import static org.junit.Assert.*;

public class RomanNumeralsAcceptTest {

  @Test
  public void shouldReturnOneForI() {
    assertEquals(1, RomanNumerals.convert("I"));
  }  

  @Test
  public void shouldReturnTwoForII() {
    assertEquals(2, RomanNumerals.convert("II"));
  }  

  @Test
  public void shouldReturnThreeForIII() {
    assertEquals(3, RomanNumerals.convert("III"));
  }  

  @Test
  public void shouldReturnFourForIV() {
    assertEquals(4, RomanNumerals.convert("IV"));
  }  

  @Test
  public void shouldReturnFiveForV() {
    assertEquals(5, RomanNumerals.convert("V"));
  }  

  @Test
  public void shouldReturnSixForVI() {
    assertEquals(6, RomanNumerals.convert("VI"));
  }  

  @Test
  public void shouldReturnSevenForVII() {
    assertEquals(7, RomanNumerals.convert("VII"));
  }  

  @Test
  public void shouldReturnEightForVIII() {
    assertEquals(8, RomanNumerals.convert("VIII"));
  }  

  @Test
  public void shouldReturnNineForIX() {
    assertEquals(9, RomanNumerals.convert("IX"));
  }  

  @Test
  public void shouldReturnTenForX() {
    assertEquals(10, RomanNumerals.convert("X"));
  }  

}

