

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0;
var losses = 0;
var gLeft = 9;
var guesses = [];

var winsText = document.getElementById("Wins");
var lossesText = document.getElementById("Losses");
var gLeftText = document.getElementById("Guesses-left");
var userChoiceText = document.getElementById("Guesses-so");

var computerGuess = Math.floor(Math.random() * alphabet.length);
var computerLetter = alphabet[computerGuess];

function random() {
    computerGuess = Math.floor(Math.random() * alphabet.length);
    computerLetter = alphabet[computerGuess];

}

document.onkeyup = function (event) {

    var userGuess = event.key.toLowerCase();
    console.log(computerLetter);
    console.log(userGuess);

    if (userGuess === computerLetter) {
        wins++;
        gLeft = 9;
        guesses = [];
        random();
    }
    else if (userGuess !== computerLetter) {

        gLeft--;
        guesses.push(userGuess);
    }

    if (gLeft === 0) {
        losses++;
        gLeft = 9;
        guesses = [];
        random();
    }
    userChoiceText.textContent = guesses.join(", ");
    gLeftText.textContent = gLeft;
    winsText.textContent = wins;
    lossesText.textContent = losses;

}   