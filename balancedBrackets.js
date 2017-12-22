/* Instructions:

Write a function balancedBrackets that accepts a string and returns true ifthe parentheses 
are balanced and false otherwise.

Example:

balancedBrackets('(');  // false
  balancedBrackets('()'); // true
  balancedBrackets(')(');  // false
  balancedBrackets('(())');  // true

Step 2:  make the solution work for all types of brackets  Example:

balancedBrackets('[](){}'); // true
 balancedBrackets('[({})]');   // true
 balancedBrackets('[(]{)}'); // false

Step 3: ignore other characters

balancedBrackets(' const obj  = { x: someFunction() }'); // true

*/

function balancedBrackets(str) {
  const stack = [];
  let open = { '{': '}', '[': ']', '(': ')' };
  let closed = { '}': true, ']': true, ')': true };
  
  for (let i = 0; i < str.length; i ++) {
    let chr = str[i];
    if (open[chr]) {
      stack.push(chr);
    } else if (closed[chr]) {
      if (open[stack.pop()] !== chr) return false;
    }
  }
  
  return stack.length === 0;
}