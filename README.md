# Constructor Word Guess Game (Advanced JavaScript Assignment)

### Overview:
Word Guess is a Node.js command-line game using JavaScript constructors. In my version, the user is being tasked with guessing various Harry Potter characters, spells, and terminology.

### Getting Started

#### These instructions will get a copy of the project running on your local machine:

1. Clone the repository
2. Run nmp install or npm i

#### Go to npmjs if you want to know more about:

1. **inquirer**: https://www.npmjs.com/package/inquirer
2. **cli-color**: https://www.npmjs.com/package/cli-color

### Running the App:
* Navigate to the root of game in your terminal
* Start the game by entering `node index.js`
* The game prints out a series of underscores to represent the Harry Potter term to be guessed and asks you to "Guess a letter" and shows the user how many guesses are left:

![Default](/images/guessstart.PNG)

* The game will show whether your guess was correct or incorrect
* You can make 10 incorrect guesses before the game is over
* When you run out of guesses, the game will ask if you want to play again:

![Default](/images/incorrectguess.PNG)

* If the user chooses yes, the game will start over:

![Default](/images/continuegame.PNG)

* If the user chooses no, the following message is displayed and ends the game:

![Default](/images/endgame.PNG)

* If the user guesses the word correctly, the following message will display and automatically show the next word to guess:

![Default](/images/correctguess.PNG)

### Technologies Used:
-	Javascript
-	Node.js
-	inquirer npm
-	cli-color npm


