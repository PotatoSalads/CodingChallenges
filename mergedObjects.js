/* Instructions: Merged Objects

Write a function that given an array of objects will return a single 'merged' object, 
where duplicate keys have the last value given. For example:

[
{1: '1', 2: '2', 3: '3'}
{3: '4', 4: '4', 5: '6'}
{5: '5', 6: '6', 7: '7'}
];

Should return:  

{1: '1', 2: '2': 3: '4', 4: '4', 5: '5', 6: '6', 7: '7'}

where the value of 5 is '5' because '5' it was the last given value for that key.

*/

function mergeObjects(arr) {
  // define a return object 'flattened'
  const flattenedObj = {};
  arr.forEach(obj => {
    const keys = Object.keys(obj);
    const values = Object.values(obj);
    console.log(keys);
    keys.forEach((key, index) => {
      flattenedObj[key] = values[index];
    });
  });
  return flattenedObj;
}

console.log(mergeObjects([
  {1: '1', 2: '2', 3: '3'},
  {3: '4', 4: '4', 5: '6'},
  {5: '5', 6: '6', 7: '7'}
  ]));
  
/* Other solution */  

function mergeObjects(arr) {
  let merged = arr[0];
  
  let i = 1;
  
  while (i < arr.length) {
    for (let key in arr[i]){
      if (arr[i].hasOwnProperty(key)) {
        merged[key] = arr[i][key];
      }
      
    }
    i++;
  }
  
  return merged;
}

mergeObjects([
{A: '1', B: '2', C: '3'},
{G: '7', I: '9'},
{A: 'One'},
{D: '4', E: '5', F: '6'},
{H: '8', I: 'Seven'},
{B: 'Two', Z: '26'}
]);