


const score = {
   wins:0,
   losses:0,
   ties:0,
};



const playGame = function () {

   const getUserChoice = function (){
      return "R";
   }
   
   const getComputerChoice = function (){
      return "P";
   }
   
   const gameLogic = function (player1, player2) {
      return "win";
   }
   
   const updateScore = function (gameOutcome) {
      // update wins if win
      // update losses if loses
      // update ties if tie
   }
   
   const displayScore = function () {
      // console log the score 
   
   }

}

const playAgain = function() {
   return false;
}

// declare a variable to track game in progress
let isGameInProgress = true;

while (isGameinprogress) {
   playGame()
}

// ask user if they want to continue
const isPlayAgain = playAgain()

// if playAgain is false, set isGameinprogress to false
if (!isPlayAgain) {
   isGameInProgress = false;
}




// ******************************************************* H **********************************


// present the user with the option to play again wether you win or lose the

// window.alert, window.prompt, window.confirm, 

// validation

// game logic:
// needs to tell you who the winner is


// store wins, ties and losses - these 3 need to be global variables
console.log("test");

let wins = 0, ties = 0, losses = 0;
let options = ["R", "P", "S"];

// take user input 
function main() {
   const userOption = prompt("please pick an option")   ??"";
   const capitalized = userOption.toUpperCase();
 



// comuter chooses at random from rock, paper, scissors 

const random = math.floor(math.random() * options.length);
const computerOption = options[random];

// console.log(main())

// work out who has won - need an algorythm for this

if (userOption === computerOption){
window.alert("its a tie")
ties++;
}

}

main();

// ***************************************************************************************

// scores: {

//    player 1:{
//       wins: 
//       losses: 
//       ties:
//    }

//    player 2:{
//       wins: 
//       losses: 
//       ties:
//    }
// }

// function will return either player 1 or 2 or tie 

// if it returns player 1, go to the p1 Object, get the wins, and add to that by +1

// maybe we are overcomplicating this, maybe just need a score object 

// game logic takes in player 1 and 2's choice, returns win loss or tie, which feeds into a second function - update score, which will add 1 , then call another function to display score and

// 1 - get user choice - call function - will return r,p,s. this value will be stored on P1's choice

// 2 - get computers choice 

// 3 - take those 2 values, pass it into the scores function detailed above 

// 4 - 
