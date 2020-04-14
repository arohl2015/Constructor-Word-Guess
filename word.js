// Contains a constructor, Word that depends on the Letter constructor. 
var Letter = require("./letter.js");
// This is used to create an object representing the current word the user is attempting to guess.
function Word(words) {
    this.words = words;
// An array of new Letter objects representing the letters of the underlying word
    this.lettersArray = [];
//  A function that returns a string representing the word. This should call the function on each letter object
    this.makeLetters = function () {
        var wordsArray = this.words.split("");
        for (let i = 0; i < wordsArray.length; i++) {
            let newLetter = new Letter(wordsArray[i]);
            this.lettersArray.push(newLetter);
        }
    }
// A function that returns a string representing the word. This should call the function on each letter object 
// (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.

    this.userGuess = function (guess) {
        this.lettersArray.forEach(letter => {
            letter.checkLetter(guess);
        });
    }

// A function that takes a character as an argument and calls the guess function on each letter object
// (the second function defined in Letter.js)
    this.display = function () {
        let displayWord = "";
        this.lettersArray.forEach(letter => {
            displayWord += letter.getCharacter() + " ";
        });
        return displayWord;
    }
}

// Exporting our word constructor. We will require it in index.js
module.exports = Word;