// The file containing the logic for the course of the game, which depends on Word.js 
var Word = require("./word.js");
// Dependency for inquirer npm package
var inquirer = require("inquirer");
// Dependency for prompt npm package
// var prompt = require("prompt"); removed --- only need one of the packages not both

// Randomly selects a word and uses the Word constructor to store it - creating variable for theme
var harryPotter = ["dumbledore", "hermione", "voldemort", "weasley",
                   "revelio", "expelliarmus", "lumos", "alohomora",
                   "muggle", "animagus", "hogwarts", "butterbeer"] 

// Prompts the user for each guess and keeps track of the user's remaining guesses
var guesses;
var selectedPotter; 
var term;
var selectedTerm;

// Function to run the game itself.
function start() {
    selectedPotter [];
    console.log("Welcome to the Harry Potter Guessing Game!");
    console.log("\n--------------\n");
    startGame();
}

function startGame() {
    selectedTerm = "";
    guesses = 15;
    if (selectedPotter.length < harryPotter.length) {
        selectedTerm = getTerm();
    } else {
        //message for when the user guesses right
        console.log("You know your Harry Potter terms!");
        continueGame();
    }
    if (selectedTerm) {
        term = new Term (selectedTerm);
        term.makeLetters();
        userGuess();
    }
}

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

function userGuess () {
    var check = [];
    inquirer.prompt ([
        {
         name: "letterGuessed",
         message: term.update() +
         "\nGuess a letter!" +
         "\nGuesses Left: " + guesses
}
])
.then(data => {
    term.lettersArray.forEach(letter => {
        letter.checkLetter(data.letterGuessed);
        check.push(letter.getCharacter());
    });
    if (guesses > 0 && check.indexOf("_")) {
        
    } else {
        
    }
}   
        
