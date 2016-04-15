package kataBattle.fizzbuzz;

import org.junit.Test;
import static org.junit.Assert.*;


public class FizzBuzzTest {

  @Test
  public void returnsTheNumberThatItIsHanded() {
    assertEquals(FizzBuzz.process(1), "1");
  }

}
