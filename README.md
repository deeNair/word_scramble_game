# Word_Scramble_Game
# Table of Contents
# About The Project
<p>Its a modified version of world scramble with a minion theme , where you help the minions to find the write scrambled word.</p>
<h1>Built With</h1>
<p>HTML</P><P>CSS</P><p>Vanilla Javascript</p>
<h1> Getting Started</h1>

Prerequisites
# Installation
To get a local copy of the code, clone it using git in your local terminal:

git clone https://github.com/deeNair/word_scramble_game.git

cd word_scramble_game

open in VSCode, to see the code using :

code .

And then open http://localhost:3000 to view it in the browser.

Also live on:
https://deenair.github.io/word_scramble_game/

# Development

## Wireframe:
![Screenshot](./image/scramble%20_game.png)

# Roadmap

This project has the following features:

1.First view has a Start Quiz button
This invokes a startGame() function .
Screenshot_1:

2.startGame() function, gives you the second view with the quiz container that has the word to be guessed, 4 option buttons with the right scrambled word to guess, continue and try again buttons,timer ,score
Screenshot_2

3.Answers are recorded using different event listeners on the buttons, "click" which also tracks correct answers,score and restarts timer when you click next question.Also displays the result.
Screenshot_3

# PseudoCode
1. consists of an array of objects called questions which holds objects in key value pair ,with each object holding 6 keys and values that consists of word,guess1,guess2,guess3,guess4 and the right answer with corresponding values.

2.startGame() function that calls the nextQuestion() function and displays the quiz container.

3.nextquestion() function hides the first view and shows the 
second view .
3.nextquestion() function generates a random number stored in a variable randomID which gets passed to the array of objects questions[]

4.The question with randomId is displayed with corresponding options also this function  restarts the timer.

5.The guessbutton the user clicks invokes the event listeneres myGuess1,

6.The guesses are checked in a if else loop to match the key ans in the array questions[randomID] with random id tht was generated and result displayed invoking the corresponding dom elements.



# Features:

1.One HTML Pages
index.html
Contains landing page to start the game and timer with two views 

2.One CSS Page
style.css
contains centering and styling for html elements;
Contains images and audio files.

3.One Javascript Page * Contains: * Variables, including arrays with object * Event listeners * if/else statements  * Functions * 

# References

Contributing
License
Contact
Acknowledgments