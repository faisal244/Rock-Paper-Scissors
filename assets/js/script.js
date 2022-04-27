
const score = {
   wins: 0,
   losses: 0,
   ties: 0,
};

const choices = [ 'R', 'P', 'S'];

// get the users choice by using a prompt
   const getUserChoice = function () {
      // prompt the user to enter Choice
      const userChoice = prompt ("Please select Rock (R) , Paper (P) or Scissors (S)").toUpperCase();;
      
      if (!userChoice) {
         isGameInProgress = false;
      } else {
         // validate the Choice
         // if not valid, then present an alert
         
          // validate if input is included in validChoices array
         if (userChoice === 'R' || userChoice === 'P' || userChoice === 'S') {
               
    
         return userChoice;
      } else {
          alert("Please select one of the following - R, P or S");
      }
   }
};
   
   
   // get the random computer choice
   const getComputerChoice = function () {
      // generate an index between 0 and 2 
      const randomindex = Math.floor (Math.random() * choices.length + 0);
      return choices[randomindex];
   };



   //  for the 2 player choice check game logic
   const gameLogic = function (player1, player2) {
      if (player1 === "R" && player2 === "P") {
         return 'lose';
      }
      if (player1 === "R" && player2 === "S") {
         return 'win';
      }
      
      if (player1 === "P" && player2 === "R") {
         return 'win';
      }

      if (player1 === "P" && player2 === "S") {
         return 'lose';
      }

      if (player1 === "S" && player2 === "R") {
         return 'lose';
      }

      if (player1 === "S" && player2 === "P") {
         return 'win';
      }

      return 'tie';
   };
   
   // update player 1 score depending on outcome
   const updateScore = function (gameOutcome) {
      // update wins if win
      // update losses if loses
      // update ties if tie
      if (gameOutcome === 'win') {
         score.wins +=1;
      }

      if (gameOutcome === 'lose') {
         score.losses +=1;

      } if (gameOutcome === 'tie') {
            score.ties +1;
   };
};
   
   
   // display the score of player 1 in the console logs
   const displayScore = function (gameOutcome) {
      console.log('Game outcome for player 1: ' + gameOutcome);
      // console log the score 
      console.log(
         'Score: W -' + 
         score.wins + 
         ' | L - ' + 
         score.losses +
         ' | T - ' + 
         score.ties
      );
   
   };



const playGame = function () {
//  get player 1 choice 
const player1Choice = getUserChoice();
console.log("player 1 plays: " + player1Choice)

// get the computer choice
const computerChoice = getComputerChoice();
console.log("Computer plays: " + computerChoice)

if (player1Choice && computerChoice) {
   // feed the player choice and computure choice to game logic 
   const gameOutcome = gameLogic(player1Choice, computerChoice);
   // console.log("Game Outcome", gameOutcome);
   // update the scores
   updateScore(gameOutcome);
   
   // display the scores
   displayScore(gameOutcome);
   // console.log("score: W - " + score.wins + " | L - " + score.losses + " | T - " + score.ties)
}


};

// present the user with a confirm modal - yes/no
const playAgain = function() {
   const isPlayAgain = confirm('do you want to play again?')
   // user will be presented with a confirm prompt
   return isPlayAgain;
}

// declare a variable to track game in progress
let isGameInProgress = true;

// start the game by calling this function
while (isGameInProgress) {
   playGame();
}

if (isGameInProgress) {
   // ask user if they want to continue
   const isPlayAgain = playAgain()
   
   // if playAgain is false, set isGameinprogress to false
   if (!isPlayAgain) {
      isGameInProgress = false;
   }


   
}

playGame ();
