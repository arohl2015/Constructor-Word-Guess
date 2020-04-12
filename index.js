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
    
}