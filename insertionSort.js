/* Instructions:

Insertion sort is a basic sorting algorithm. Insertion sort
iterates over an array, growing a sorted array behind the current location.
It takes each element from the input and finds the spot, up to the current point,
where that element belongs. It does this until it gets to the end of the array.
https://en.wikipedia.org/wiki/Insertion_sort

*/

function insertionSort(arr) {
  var length = arr.length;
  for (var i = 1; i < length; i++) {
    var temp = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > temp; j--) {
      arr[j+1] = arr[j];
    }
    arr[j+1] = temp;
  }
  return arr;
}

console.log(insertionSort([3,6,1,4,73,234,53,3,23,53,2]));