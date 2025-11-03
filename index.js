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
  const msg1 = " Please select the difficulty level: \n";
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
  const gameIntro =
    " Great! You have selected the Easy difficulty level. \n Let's start the game \n";
  console.log(gameIntro);

  rl.question("Enter your guess: ", (number) => {
    const user = parseint(number);

    if (user === RandomNumber) {
      console.log(
        ` congratulation you won, \n you guessed the correct number in ${
          trial + 1
        } attempts. `
      );
    } else if (user !== RandomNumber) {
    }
  });
}

introduction();
difficultyLevel();
