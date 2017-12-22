/*
Consider the prime number 23. 

If we sum the square of its digits we get: 2^2 + 3^2 = 13, 
then for 13: 1^2 + 3^2 = 10, and finally for 10: 1^2 + 0^2 = 1.

Similarly, if we start with prime number 7, 
the sequence is: 7-> 49-> 97-> 130-> 10-> 1.

Given a range, how many primes within that range have this property? 
*/

// squares each digit of a number and adds them together
function sumOfSquares(num) {
  let sum = 0;
  if (num >= 10) {
    numArr = num.toString().split('');
    for (let i = 0; i < numArr.length; i++) {
      sum += Math.pow(parseInt(numArr[i]), 2);
    } 
  } else {
    sum = Math.pow(num, 2);
  }
  return sum;
}

// checks if further sum of squares need to occur
// returns true if the prime can be reduced to 1
// returns false if ends up in an endless loop
function checkProperty(num) {
  let sum = sumOfSquares(num); // n^2 + m^2 = sum
  let results = [];
  results[0] = sum;
  // performs sumOfSquares until sum = 1 or it starts repeating
  while (sum !== 1) {
    sum = sumOfSquares(sum);
    if (results.includes(sum)) {
      return false;
    } else {
      results.push(sum);
    }
  }
  return true;
}

// Function taken from twinPrime coding challenge
// checks if a value is prime
function isPrime(value) {
  if (value < 2) return false;
    for(var i = 2; i < value; i++) {
        if(value % i === 0) {
            return false;
        }
    }
    return true;
}

// pretty sure I overcomplicated this--but it was fun

function primeReduction(a, b) {
  let min = a;
  let max = b;
  // loop over the range
  let counts = 0;
  for (let i = min; i <= max; i++) {
    if (isPrime(i) && checkProperty(i)) {
      counts++;
      console.log(i);
    }
  }
  return counts;
}
primeReduction(1, 25);