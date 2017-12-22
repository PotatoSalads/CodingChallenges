/* Instructions:
Write a function called rockPaperScissors that will calculate all the possibilities of three rounds of rock paper scissors, and output all those possibilities. Test 1 is testing for this.

Example: 
 [ [ 'rock', 'rock', 'rock' ],
   [ 'rock', 'rock', 'paper' ],
   [ 'rock', 'rock', 'scissors' ],
   [ 'rock', 'paper', 'rock' ],
   [ 'rock', 'paper', 'paper' ],
   [ 'rock', 'paper', 'scissors' ],
   [ 'rock', 'scissors', 'rock' ],
   [ 'rock', 'scissors', 'paper' ],
   [ 'rock', 'scissors', 'scissors' ],
   [ 'paper', 'rock', 'rock' ],
   [ 'paper', 'rock', 'paper' ],
   [ 'paper', 'rock', 'scissors' ],
   [ 'paper', 'paper', 'rock' ],
   [ 'paper', 'paper', 'paper' ],
   [ 'paper', 'paper', 'scissors' ],
   [ 'paper', 'scissors', 'rock' ],
   [ 'paper', 'scissors', 'paper' ],
   [ 'paper', 'scissors', 'scissors' ],
   [ 'scissors', 'rock', 'rock' ],
   [ 'scissors', 'rock', 'paper' ],
   [ 'scissors', 'rock', 'scissors' ],
   [ 'scissors', 'paper', 'rock' ],
   [ 'scissors', 'paper', 'paper' ],
   [ 'scissors', 'paper', 'scissors' ],
   [ 'scissors', 'scissors', 'rock' ],
   [ 'scissors', 'scissors', 'paper' ],
   [ 'scissors', 'scissors', 'scissors' ] ] 

Hardmode: Write the function so that it accepts an integer, and prints out that many rounds of possibilities. 
Test 2 is testing for this.
*/

//const rockPaperScissors = (roundNum) => {
var rockPaperScissors = function(roundNum) {
  //number of rounds for RPS game --> 3^(roundNum)
  let winArray = [];
  let round = ['rock', 'paper', 'scissors'];

//const findResults = (rounds, result) => {
function findResults(rounds,result){
  // push rounds to the winArray after going through each one
  if (rounds === 0) {
    winArray.push(result);
    return;
  }
  
  //round.forEach((turn) => {
  round.forEach(function(turn){
    //The results is the total array of possibilities
    findResults(rounds - 1, result.concat(turn));
  });
}

findResults(roundNum, []);
return winArray;
};