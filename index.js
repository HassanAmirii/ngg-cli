const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const RandomNumber = Math.floor(Math.random() * 100);

function introduction() {
  const msg =
    " Welcome to the Number Guessing Game! \n I'm thinking of a number between 1 and 100. \n";
  console.log(msg);
}
function difficultyLevel() {
  const msg1 = " Please select a difficulty level: \n";
  const msg2 =
    "1. Easy (10 chances) \n 2. Medium (5 chances) \n 3. Hard (3 chances) \n ";
  console.log(msg1, msg2);

  rl.question("pick either 1, 2 or 3: ", (number) => {
    const level = parseInt(number);
    if (level === 1) {
      easyGame();
    } else if (level === 2) {
      mediumGame();
    } else if (level === 3) {
      hardGame();
    } else {
      console.log("please pick either 1 , 2 or 3: ");
    }
  });
}

function easyGame() {
  let chances = 10;
  let trial = 0;
  let user;
  const gameIntro =
    " Great! You have selected the Easy difficulty level. \n Let's start the game \n";
  console.log(gameIntro);

  function easyGameEngine() {
    try {
      rl.question("Enter your guess: ", (number) => {
        user = parseInt(number);
        if (isNaN(user)) {
          const msg = "Text not allowed; kindly input a digit between 1 - 100";
          console.log(msg);
          easyGame();
        }
        if (chances == 0) {
          const msg1 = "game over you ran out of chances, you LOSERRRRRR";
          const msg2 = "well if you wish to play again";
          console.log(msg1, msg2);
          return;
        }

        if (user !== RandomNumber) {
          chances--;
          trial++;
          if (user < RandomNumber) {
            console.log(` Incorrect! The number is greater than ${user}.`);
            easyGameEngine();
          } else if (user > RandomNumber) {
            console.log(`Incorrect! The number is less than ${user}.`);
            easyGameEngine();
          }
        } else {
          console.log(
            ` congratulation you won, \n you guessed the correct number in ${trial} attempts. `
          );
          console.log("if you wish to go again: ");
          difficultyLevel();
        }
      });
    } catch (error) {
      console.error(error);
    }
  }
  easyGameEngine();
}

introduction();
difficultyLevel();
