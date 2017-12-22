/* Instructions:
Write a function that returns the count of the total number of vowels in a string.

Example: 'Hello World!' -> 3
*/

// need to identify vowels
// foreach loop would probably work best
  // add count if vowel present
  // [a, e, i, o, u]
function vowelCount(str) {
  //const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;
  
  for (i = 0; i < str.length; i++) {
    let char = str.charAt(i)
    char = char.toLowerCase()
    if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u') {
      ++count;
    }
  }
  return count;
}