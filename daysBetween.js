/* Instructions:

Calculate and return the number of days between two dates as a string.

Dates may be in any combination of ISO, short or long formats.

Example formats:
'November 4, 2017'
'5 Nov, 2017'
'Nov 4, 2017'
'11/04/2017'
'11/05/2017'
'11/04/2017'

*/

function daysBetween (start, end) {
  const date1 = new Date(start);
  const date2 = new Date(end);
  const days = (date2 - date1)/(1000*3600*24); //convert ms to days
  return days.toString(); // Test wants days as a string
}
// test
console.log(daysBetween('11/04/2017', '11/16/2017'));