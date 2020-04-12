// The file containing the logic for the course of the game, which depends on Word.js 
var Word = require("./word.js");
// Dependency for inquirer npm package
var inquirer = require("inquirer");
// Randomly selects a word and uses the Word constructor to store it

// Prompts the user for each guess and keeps track of the user's remaining guesses