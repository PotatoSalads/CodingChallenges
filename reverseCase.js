/* Instructions:
Write a function that takes in a string, reverses the 'casing' of that string.

reverseCase('HelloWorld');
--> 'hELLOwORLD';
*/


function reverseCase(str) {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    let character = str.charAt(i);
    if (character !== character.toUpperCase()) {
      character = character.toUpperCase();
      newStr += character;
    } else if (character !== character.toLowerCase()) {
      character = character.toLowerCase();
      newStr += character;
    } else {
      newStr += character;
    }
  }
  return newStr;
}