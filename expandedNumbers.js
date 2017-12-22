/* Instructions:

Write a function that accepts a number and returns it in a string as it's expanded form.

Example: Given the number 562 your function should return '500 + 60 + 2'.

*/

function expandedNums (num) {
  return num.toString().split('').reduce(function (currentVal, nextVal, index, array) {
    if (array[index] === '0') {
      return currentVal + nextVal;
    }
    return currentVal + '0'.repeat(array.length - index) + " + " + nextVal;
  });
}