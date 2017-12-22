/* Instructions:

Given three strings, str1, str2, str3. str3 is said to be a shuffle of str1 and str2 
if it can be formed by interleaving the characters of str1 and str2 in such a manner
that it maintains left to right ordering from each string. 
Given str1 = 'abc' and str2 = 'def', str3 = 'dabecf' is a valid shuffle since it 
preserves the character ordering of the two strings. 

So, given these three strings, write a function that detects whether str3 is a valid 
shuffle of str1 and str2.

*/

// iterate over array of combinations
  // use if statements to see if they match str3
  // if they do -- true; dont false
function checkString(str1, str2, str3) {
  let pointStr1 = str1.length - 1;
  let pointStr2 = str2.length - 1;
  let pointStr3 = str3.length - 1;

  while (pointStr3 >= 0) {
    if (str3[pointStr3] === str2[pointStr2]) {
      pointStr2--;
    } else if (str3[pointStr3] === str1[pointStr1]){
      pointStr1--;
    } else {
      return false;
    }

    pointStr3--;
  }
  return true;
}