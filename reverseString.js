/* Instructions:
 Write a function called reverseString that accepts a string and returns a reversed copy of the string.
Input Example:

'hello world'
'asdf'
'CS rocks!'
Output Example:

'dlrow olleh'
'fdsa'
'!skcor SC'
*/

function reverseString(str) {
  const newString = str.split('').reverse().join('');
  return newString;
}
console.log(reverseString('coffee and books'));