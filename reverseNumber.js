/* Instructions:
 Write a function called reverseNumber that reverses a number.
Input Example:

12345
555
Output Example:

54321
555
*/

function reverseNumber(num) {
  numStr = num.toString();
  numStr = numStr.split("").reverse().join("");
  newNum = Number(numStr);
  return newNum;
}

/* Model Solution */

function reverseNumber(num) {
  return parseInt(num.toString().split('').reverse().join(''));
}