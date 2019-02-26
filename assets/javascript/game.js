var winsCount = 0;
var lossesCount = 0;
var guessesLeftCount = 5;
var guessesList = [];

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


document.onkeyup = function(event) {
    var userGuess = event.key;
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    if(userGuess == computerGuess) {
        winsCount++;
        guessLeftCount = 5;
        guessesList = [];
        console.log("winsCount")
    }else {
        lossesCount++;
        guessesLeftCount--;
        guessesList.push(userGuess);
        console.log("lossesCount")
    }
}
document.getElementsByClassName("wins").innerHtml = winsCount;
document.getElementsByClassName("losses").innerHtml = lossesCount;
document.getElementsByClassName("guesses-left").innerHtml = guessesLeftCount
document.getElementsByClassName("guesses-so-far").innerHtml = guessesList
