/* Instructions:

Given an array comprised of 0s and 1s, write a function in 
linear time that will sort the array.  Ex:

[0, 1, 0, 1, 0, 1, 0, 1] => [0, 0, 0, 0, 1, 1, 1, 1].

*/

function binarySort(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      newArr.push(arr[i]);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(binarySort([0,1,1,1,0,1,0]));