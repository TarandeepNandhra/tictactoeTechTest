# Try our Tic Tac Toe Tech Test!

This is a very common tech test as it demonstrates a candidate's knowledge of basic data structures.

## The brief

The rules of tic tac toe are as follows:

* There are two players in the game (X and O)
* X goes first
* Players take turns until the game is over
* A player can claim a field if it is not already taken
* A turn ends when a player claims a field
* A player wins if they claim all the fields in a row, column or diagonal
* A game is over if a player wins
* A game is over when all fields are taken

Build the business logic for a game of tic tac toe. It should be easy to implement a working game of tic tac toe by combining your code with any user interface, whether web or command line.

## Implementation

Do this in js so can make a front end in react-native

use class so can store state of board as [[],[],[]] 3x3 grid for testing.

Method which plays the game with input from player (X or O)

Helper methods factored out.

Win method
  3 horz
  3 vert
  2 diag

Play method will always return either:
  - Player _ Wins! (if X or O wins)
  - Draw! (if board is full)
  - State of game (if no win or draw)