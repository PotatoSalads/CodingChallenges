/* Instructions

Define a function that takes in a positive integer, and returns the Roman Numeral 
representation of that number.  

Symbol    Value
 I          1
 V          5
 X          10
 L          50
 C          100
 D          500
 M          1,000 

Example: romanNumeralize(1990) should return 'MCMXC'. 

*/

function romanNumeralize(number) {
  let romannumeral = '';
  let numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

  for (let i = 0; i < numbers.length; i++) {
    while (number >= numbers[i]) {
      romannumeral += roman[i];
      number -= numbers[i];
    }
  }
  return romannumeral;
}

/* Model Solution */

function romanNumeralize(number) {
  key = {
     M: 1000, 
    CM:  900, 
     D:  500, 
    CD:  400, 
     C:  100, 
    XC:   90,
     L:   50, 
    XL:   40, 
     X:   10, 
    IX:    9, 
     V:    5, 
    IV:    4, 
     I:    1,
  };
  
  let returnString = '';
  for (let entry in key) {
    while (number >= key[entry]) {
      returnString += entry;
      number -= key[entry];
    }
  }
  return returnString;
}
