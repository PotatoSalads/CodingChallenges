/* Instructions:

You are given an array of strings called arr and an integer k. Your task is to return the 
longest string consisting of k consecutive strings from the array. Example: 

longestConsecutive(["zone", "abigail", "theta", "form", "libe", "zas"], 2), "abigailtheta" 
n being the length of the string array, if n = 0 or k > n or k <= 0 return "". 

*/

function longestConsecutive(arr, k) {
  const n = arr.length;
  if (n === 0 || k > n || k <= 0) {
    return "";
  } else {
    let longest = "";
    for (let i = 0; i < arr.length; i++) {
      const temp = [];
      for (let j = i; j < i+k; j++) {
        temp.push(arr[j]);
      }
      if (temp.join('').length > longest.length) {
        longest = temp.join('');
      }
    }
    return longest;
  }
}
console.log(longestConsecutive(["zone", "abigail", "theta", "form", "libe", "zas"], 4)); // "abigailtheta"