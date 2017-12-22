/* Instructions:

Implement a method to perform basic string compression using the counts of repeated 
characters.

For example, the string  'aabcccccaaa' would become a2b1c5a3.

If the "compressed" string would not become smaller than the original string, your method 
should return the original string.

You can assume the string has only uppercase and lowercase letters (a - z). 

*/

function stringCompression(str) {
  
  str = str.toLowerCase();
  let newStr = '';
  let count = 1;
  for (let i = 1; i < str.length; i++) {
    if (str.charAt(i) === str.charAt(i-1)) {
      count++;
    } else {
      newStr += str[i-1] + count.toString();
      count = 1;
    }
  }
  newStr += str[str.length-1] + count.toString();
  // resubmitted with cleaned up if/else statement
  return newStr.length >= str.length ? str: newStr;
}

/* Model Solution */

function stringCompression(string) {
  let currentChar = null;
  let compressedStr = '';
  let charCount = 1;
  for (let i = 0; i <= string.length; i++) {
    if (string[i] === currentChar) charCount++;
    if (currentChar === null) currentChar = string[i];
    if (string[i] !== currentChar || string[i] === undefined) {
      compressedStr += currentChar;
      compressedStr += charCount;
      charCount = 1;
      currentChar = string[i];
    }
  }
  return compressedStr.length < string.length? compressedStr : string;
}