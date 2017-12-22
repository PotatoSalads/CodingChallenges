/* Instructions:

A twin prime is a prime number that differs from another prime number by two. Write a 
function called isTwinPrime which takes an integer and returns true if it is a twin 
prime, or false if it is not.

Example:

5 is a prime, and 5 + 2 = 7, which is also a prime, so returns true.
9 is not a prime, and so does not need checking, so it returns false.
7 is a prime, but 7 + 2 = 9, which is not a prime. However, 7 - 2 = 5, which is a prime, 
so it returns true.
23 is a prime, but 23 + 2 = 25, which is not a prime, and 23 - 2 = 21, which is not a 
prime, so it returns false.

*/

function isTwinPrime(n) {
  if (n <= 2) return false;
  // check if prime
  if (isPrime(n)) {
    const primePos = n + 2;
    const primeNeg = n - 2;
    if(isPrime(primePos)) {
      return true;
    } else if (isPrime(primeNeg)) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

function isPrime(value) {
    for(var i = 2; i < value; i++) {
        if(value % i === 0) {
            return false;
        }
    }
    return true;
}

/* Model Solution */
function isTwinPrime(n) {
  function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return num >= 2;
  }
  return (isPrime(n) && (isPrime(n - 2) || isPrime(n + 2)));
}