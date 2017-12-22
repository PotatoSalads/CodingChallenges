/* Instructions:

Given a sum and a product, find two integers x and y, where x + y === sum, and 
x * y === product. You will return this in an array.

For example, calling sumAndProduct(6, 9) should return [3, 3] because 
3 + 3 === 6, and 3 * 3 === 9.

Please make sure to return your array such that x <= y in the format [x, y].

*/


// x+y=sum x*y=product
// x = sum - y 
// -y^2 +y(sum) - product = 0
// use quadratic equation
// y = (sum +/- sqrt(sum^2 -4product))/2
// use if statements to check if it is a number and if it is an integer
function sumAndProduct(sum, product) {
  let ypos = (sum + (Math.sqrt((sum*sum)-(4*product))))/2;
  let x = sum - ypos;
  let arr = [];
  if (isNaN(x) || isNaN(ypos)) {
    return arr = null;
  } else if (!Number.isInteger(x) || !Number.isInteger(ypos)) {
    return arr = null;
  }else {
    arr = [x, ypos];
    return arr;
  }
}

/* Model Solution */

function sumAndProduct(sum, product) {
  for (let i = 0; i <= sum / 2; i++) {
    if (i * (sum - i) === product) return [i, (sum - i)];
  }
  return null;
}