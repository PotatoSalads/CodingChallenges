/* Instructions:

Reference https://en.wikipedia.org/wiki/Merge_sort for more detail about how this sorting 
algorithm works.

Sort an array of integers using the merge sort algorithm.

First divide the list into its smallest unit (arrays with a single item in them)
Then compare each element with the adjacent list and combine them in the proper order.

Repeat until the entire array is sorted.

Example: 
- Input: [1, 6, 3, 2, 4, 7]
- Expected Output: [1, 2, 3, 4, 6, 7];

[1, 6, 3, 2, 4, 7] -> [1, 2, 3, 4, 6, 7]
[1, 6, 3][2, 4, 7]
[1][6, 3][2][4, 7]
[1][6][3][2][4][7]
[1, 3][6][2][4][7]
[1, 3][6][2, 4][7]
[1, 3, 6][2, 4][7]
[1, 3, 6][2, 4, 7]
[1, 2, 3, 4, 6, 7]

*/

function mergeSort(arr) {
  if (arr.length < 2) { return arr; } // already sorted
  // split everything up
  let halfIndex = parseInt(arr.length / 2);
  let first   = arr.slice(0, halfIndex);
  let second  = arr.slice(halfIndex, arr.length);
 
  return merge(mergeSort(first), mergeSort(second));
}
 
function merge(first, second) {
    let newArr = [];
 
    while (first.length && second.length) {
        if (first[0] <= second[0]) {
            newArr.push(first.shift());
        } else {
            newArr.push(second.shift());
        }
    }
 
    while (first.length)
        newArr.push(first.shift()); 
 
    while (second.length)
        newArr.push(second.shift());
 
    return newArr;
  
}
mergeSort([1,6,3,2,4,7]);