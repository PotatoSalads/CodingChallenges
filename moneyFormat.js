/* Instructions:

Given a positive float number, write a function called moneyFormat that formats the float 
into a string.

Example:
moneyFormat(2310000.159897); should return '2 310 000.16'

*/

function moneyFormat(float) {
  let floatString = float.toFixed(2);
  floatString = floatString.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ");
  return floatString;
}

console.log(moneyFormat(24567.3457));
