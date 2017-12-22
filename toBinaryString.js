/* Instructions:

Given a positive (or 0) number, return a string of 1's and 0's representing it's binary 
value: 

toBinaryString(6) should return "110" (no leading 0).   

Use of the native method number.toString(2);  is disallowed.

*/

function toBinaryString(number) {
  let str = "";
  while (number > 0) {
    if (number % 2 === 0) {
      str = '0' + str;
      number /= 2;
    }
    if (number % 2 !== 0) {
      str = '1' + str;
      number = (number - 1)/2;
    }
  }
  return str;
}
console.log(toBinaryString(6));