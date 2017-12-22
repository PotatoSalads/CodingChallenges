/* Instructions:

Write a function called sumOfDigits that given a positive integer, returns the sum of its 
digits.Assume all numbers will be positive. 

Input Sample: 
23
496

Output Sample: 
5
19

sumOfDigits(23) => 5 because 2 + 3 = 5.

*/

function sumOfDigits(n) {
  const nStr = n.toString().split('');
  let sum = 0;
  nStr.forEach(function(element) {
    sum += Number(element);
  });
  return Number(sum);
}