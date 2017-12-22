/* Instructions:

Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized.   

toCamelCase("the-stealth-warrior")  
// returns "theStealthWarrior"
toCamelCase("The_Stealth_Warrior") 
 // returns "TheStealthWarrior"
 
*/
 
function toCamelCase(str) {
  return str.replace(/[_-][A-Za-z]/g, function(match) {return match[1].toUpperCase();});
}

console.log(toCamelCase('the-stealth-warrior'));