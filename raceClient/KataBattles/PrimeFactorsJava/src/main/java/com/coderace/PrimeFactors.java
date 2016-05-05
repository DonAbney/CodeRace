package com.coderace;

import java.util.ArrayList;
import java.util.List;

/* Factorize a positive integer number into its
  prime factors.

  Note: 1 has no prime factor.
  */

public class PrimeFactors {
    public List<Integer> generate(int number) {
        ArrayList<Integer> primeFactors = new ArrayList<>();
        primeFactors.add(1);
        return primeFactors;
    }
}
