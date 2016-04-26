package com.coderace;

import org.junit.Test;
import java.util.Arrays;
import static org.junit.Assert.assertEquals;

public class TestPrimeFactors {

    PrimeFactors generator = new PrimeFactors();

    @Test
    public void _1_has_no_prime_factor() {
        assertEquals(Arrays.asList(), generator.generate(1));
    }

}
