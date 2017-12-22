/* Instructions:

Explain what is wrong with this code and how you would fix this.
With ES6 there is a very, very simple way to solve this.
See if you can solve this with just ES5 JS.
The output should be 1, 2, 3, .... 10. Right now it just prints 11.
I've been asked this three times in separate interviews.

You may add, or change the code, but you cannot delete the setTimeout function.

*/

for (var i = 1; i <= 10; i++) {
	(function(x) {
    	setTimeout(function() { console.log(x); }, 0);
    })(i);
}
