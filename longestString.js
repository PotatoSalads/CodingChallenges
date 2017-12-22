/* Instructions:
Write a function that accepts an array of strings.

Return the longest string in the array.

example:

longestString(['hello', 'goodbye', 'abc']);


--> 'goodbye'
*/

function longestString(arr) {
  let longest = 0;
  let longestStr = [];
  for (let i = 0; i < arr.length; i++) {
    if (longest === 0) {
      longest = arr[i].length;
      longestStr = arr[i];
    } else if (longest < arr[i].length) {
      longest = arr[i].length;
      longestStr = arr[i];
    }
  }
  return longestStr;
  
}

console.log(longestString(['birds', 'doggos', 'elephants', 'tigers']));