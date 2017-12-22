/* Instructions:

Write a function called sumOfDigits that given a positive integer, returns the sum of 
its digits.Assume all numbers will be positive. 
Input Sample: 

23
496
Output Sample: 

5
19

*/
function sumOfDigits(num) {
  let newNum = num.toString().split('');
  let sum = 0;
  for (let i = 0; i < newNum.length; i++) {
    sum += parseInt(newNum[i]);
  }
  return sum;
}