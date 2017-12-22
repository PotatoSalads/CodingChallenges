/* Instructions:

Write a function called getProduct that gets the product of all the integers at the array 
EXCEPT the one at that index.


For example, given [1, 9, 6, 5, 2] your function should return [540, 60, 90, 108,  270], 
because the calculation looks like this:


[9 * 6 * 5 * 2, 1 * 6 * 5 * 2, 1 * 9 * 5 * 2, 1 * 9 * 6 * 5].


Edge cases:
No division, as some arrays may include 0.
Target time: O(n)

*/

const getProduct = function (arr) {
  const productArray = [];
  let product = 1;
  // product of integers before index
  // productArray[i] = 1, 
  for (let i = 0; i < arr.length; i++) {
    productArray[i] = product;
    product *= arr[i];
  }
  // product of integers after index
  product = 1;
  for (let i = arr.length - 1; i >= 0; i--) {
    productArray[i] *= product;
    product *= arr[i];
  }
  return productArray;
};

console.log(getProduct([1, 2, 3]));