/* Instructions: Next Palindrome

Given a number, find the next smallest palindrome number larger than 
the number. If the number is 125. the next palindrome is 131. 

*/
function nextPalindrome(num) {
  num++;
  while (!isPalindrome(num)) {
    num++;
  }
  return num;
}


function isPalindrome(num) {
  numArr = [];
  numArr = num.toString().split('');
  if (num < 10 && num >= 0) {
    return true;
  }
  let length = numArr.length;
  let test = false;
  if (length % 0 !== 0) {
    //if it is odd
    length = Math.floor(length/2);
  }
  for (let i = 0; i < length; i++) {
    if (numArr[i] !== numArr.pop()) {
      return false;
    } else test = true;
  }
  return test;
}
console.log(nextPalindrome(-55));

/* Model Solution */

function nextPalindrome(n) {
  let m = n + 1;
  if ((m + '') ===(m + '').split('').reverse().join('')) return m;
  return nextPalindrome(m);
}