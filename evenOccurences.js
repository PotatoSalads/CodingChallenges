/* Instructions: 
Find the first item that occurs an even number of times in an array.
Remember to handle multiple even-occurrence items and return the first one.
Return null if there are no even-occurrence items.
*/

function evenOccurrence(arr) {
  const countObj = {};  
  arr.forEach((num) => {
    if (!countObj[num]) { //falsy
      countObj[num] = 1;
      return;
    }
    countObj[num]++;
  });
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (countObj[num] % 2 === 0) {
      return num;
    }
  }
  return null;
}