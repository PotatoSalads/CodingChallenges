/* Instructions:

Write a function called sortString that returns a passed string with letters in alphabetical order.  Expected Input:  

'dcba'
'zycxbwa'

Expected Output:  

'abcd'
'abcwxyz'

*/

function sortString(str) {
  let strArray = [];
  for (let i = 0; i < str.length; i++) {
    strArray[i] = str.charAt(i);
  }
  return strArray.sort().join('');
  
}