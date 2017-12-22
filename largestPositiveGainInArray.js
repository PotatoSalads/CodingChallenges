/* Instructions:

Define a function largestDifference that takes an array, and returns the highest gain 
from left to right.

For example, [10, 7, 5, 8, 11, 9] the largestDifference is 6, from 5 to 11.

Given an array of numbers that don't return a positive number, 
such as [100, 90, 80, 50, 10] return 0.

*/

function largestDifference(arr) {
  let difference = null;
  for(let i = 0; i < arr.length; i++){
    for(let j = i+1; j < arr.length; j++){
        if(arr[i] < arr[j] && difference < (arr[j] - arr[i])){
            difference = arr[j] - arr[i]
        }
    }
  }
  return difference === null ? 0 : difference;
}

console.log(largestDifference([10, 7, 5, 8, 11, 9]));