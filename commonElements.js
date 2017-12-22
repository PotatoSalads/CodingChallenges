/* Instructions:
Write a function called commonElements that has parameters for two arrays.  
Return an array of all items that are present in both arrays.  Do not modify the arrays 
that are passed in.
Input Example:

[1, 2, 3, 4] [3, 4, 5, 6]
['a', 'b', 'c'] ['x', 'y', 'z', 'a']
[1, 2, 3] [4, 5, 6]
Output Example:

[3, 4]
['a']
[]
*/

function commonElements(arr1, arr2) {
  const commonArr = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        commonArr.push(arr1[i]);
      }
    }
  }
  return commonArr;
}

/* Model Solution */
function commonElements(arr1, arr2) {
  const matches = [];
  arr1.forEach(element => {
    if (arr2.includes(element)) matches.push(element);
  });
  return matches;
}