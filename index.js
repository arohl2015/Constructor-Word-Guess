// The file containing the logic for the course of the game, which depends on Word.js 
var Word = require("./word.js");
// Dependency for inquirer npm package
var inquirer = require("inquirer");
// Dependency for cli-color to change font colors in terminal
var cli = require("cli-color");
// Dependency for prompt npm package
// var prompt = require("prompt"); removed --- only need one of the packages not both

// Randomly selects a word and uses the Word constructor to store it - creating variable for theme
var harryPotter = ["dumbledore", "hermione", "voldemort", "weasley",
    "revelio", "expelliarmus", "nox", "alohomora",
    "muggle", "animagus", "hogwarts", "butterbeer"]

// Prompts the user for each guess and keeps track of the user's remaining guesses
var guesses;
var selectedPotter;
var words;
var selectedTerm;

// Function to run the game itself.
function start() {
    selectedPotter = [];
    console.log(cli.blue.underline("Welcome to the Harry Potter Guessing Game!"));
    console.log("\n-------------------------------\n");
    startGame();
}

// Create the function to start the game and set the number of guesses
// If/Else statement if user wins and creates next word
function startGame() {
    selectedTerm = "";
    guesses = 10;
    if (selectedPotter.length < harryPotter.length) {
        selectedTerm = getTerm();
    } else {
//message for when the user guesses right/wins
        console.log(cli.green("You know your Harry Potter!"));
        continuePrompt();
    }
    if (selectedTerm) {
        words = new Word(selectedTerm);
        words.makeLetters();
        userGuess();
    }
}
// creates the ability to caculate the length of the words
function getTerm() {
    var random = Math.floor(Math.random() * harryPotter.length);
    var randomTerm = harryPotter[random];
    if (selectedPotter.indexOf(randomTerm === -1)) {
        selectedPotter.push(randomTerm);
        return randomTerm;
    } else {
        return getTerm();
    }
}
// 
function userGuess() {
    var check = [];
    inquirer.prompt([
        {
            name: "letterGuessed",
            message: words.display() +
                cli.yellow("\nGuess a letter!") +
                cli.yellow("\nGuesses Left: ") + guesses
        }
    ])
        .then(data => {
            words.lettersArray.forEach(letter => {
                letter.checkLetter(data.letterGuessed);
                check.push(letter.getCharacter());
            });
// In Javascript, the exclamation mark (“!”) symbol, called a “bang,” is the logical “not” operator. Placed in front of a boolean value it will reverse the value, returning the opposite.
            if (guesses > 0 && check.indexOf("_") !== -1) {
        guesses--;
            if (guesses === 0) {
        console.log(cli.red("Bet you wish you could obliviate those guesses. GAME OVER!"));
        continuePrompt();
    } else {
        userGuess();
    }
        }  else {
    console.log(cli.green("You are a true Potterhead!"));
    console.log(words.display());
    startGame();
}
});
}

function continuePrompt() {
    inquirer.prompt ([
        {
         name: "continue",
         type: "list",
         message: "Would you like to continue on your magical journey?",
         choices: ["Yes", "No"]
        }
    ])
    .then(data => {
        if (data.continue === "Yes") {
            start();
        } else {
            console.log(cli.magentaBright("Thanks for playing! Put your wand away until next time."));
        }
    });
}

start();