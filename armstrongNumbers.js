/* Instructions:

An Armstrong number is an n-digit number that is equal to the sum of the n'th powers of 
its digits. Determine if the input numbers are Armstrong numbers.  Return either true or 
false .

For example with the number 153 there are 3 digits so you would add together the cubed 
values of all the digits like this: 1^3 + 5^3 + 3^3 === 153.

Another example is the number 6, where 6 ^ 1 === 6.

isArmstrongNumber(15) returns false because 1 ^ 2 + 5 ^ 2 = 26 which does not equal 15.
Input Sample:

6
153
351
Output Sample:

true
true
false

*/
function isArmstrongNumber(n) {
  let numArray = n.toString().split(''); // split number by digits
  let compareNum = 0;
  for (let i = 0; i < numArray.length; i++) {
    // add digits of the numArray each to the power of its length
    compareNum += Math.pow(Number(numArray[i]), numArray.length);
  }
  // test n to the compare number
  if (compareNum === n) {
    return true;
  } return false;
}

console.log(isArmstrongNumber(153));
