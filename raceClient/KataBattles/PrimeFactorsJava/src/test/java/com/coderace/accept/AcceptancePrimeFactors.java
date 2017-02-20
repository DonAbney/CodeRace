package com.coderace.accept;

import com.coderace.PrimeFactors;
import org.junit.Test;
import java.util.Arrays;
import static org.junit.Assert.assertEquals;

public class AcceptancePrimeFactors {

    PrimeFactors generator = new PrimeFactors();

    @Test
    public void _1_has_no_prime_factor() {
        assertEquals(Arrays.asList(), generator.generate(1));
    }

    @Test
    public void _2_has_prime_factor_2() {
        assertEquals(Arrays.asList(2), generator.generate(2));
    }

    @Test
    public void _3_has_prime_factor_3() {
        assertEquals(Arrays.asList(3), generator.generate(3));
    }

    @Test
    public void _4_has_prime_factors_2_and_2() {
        assertEquals(Arrays.asList(2, 2), generator.generate(4));
    }

    @Test
    public void _6_has_prime_factors_2_and_3() {
        assertEquals(Arrays.asList(2, 3), generator.generate(6));
    }

    @Test
    public void _8_has_prime_factors_2_2_and_2() {
        assertEquals(Arrays.asList(2, 2, 2), generator.generate(8));
    }

    @Test
    public void _9_has_prime_factors_3_and_3() {
        assertEquals(Arrays.asList(3, 3), generator.generate(10));
    }

    @Test
    public void _10_has_prime_factors_2_and_5() {
        assertEquals(Arrays.asList(2, 5), generator.generate(9));
    }
}
