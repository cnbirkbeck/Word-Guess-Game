//VARIABLES
var words = ["gryffindor", "slytherin", "hufflepuff", "ravenclaw","hogwarts", "dumbledore", "quidditch", "voldemort", "boggart", "darkmark"]

//Empty variables to store values later
var randomWord = "";
var lettersOfWord = []
var blanks = 0;
var blanksAndCorrect = [];
var wrongGuess = [];

//Counter Variables
var wins = 0;
var losses = 0;
var guessesRemaining = 9;



// ALL FUNCTIONS
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


//__________________________________________________________
//GAME START FUNCTION
//__________________________________________________________
function Game() {
    //computer generates random word from words array
    randomWord = words[Math.floor(Math.random() * words.length)];

    // split the individual word into separate arrays, and store in new array 
    lettersOfWord = randomWord.split("");

    //store length of word in blanks, for later use
    blanks = lettersOfWord.length;

    //creating a loop to generate "_" for each letter in array stored in blanks
    for (var i = 0; i < blanks; i++) {
        blanksAndCorrect.push("_");
    }

    //showing the "_" within HTML
    document.getElementById("currentword").innerHTML = "  " + blanksAndCorrect.join("  ");

    //console logging 
    console.log(randomWord);
    console.log(lettersOfWord)
    console.log(blanks)
    console.log(blanksAndCorrect)
}


//__________________________________________________________
//AUDIO FUNCTION
//__________________________________________________________

//variables for audio function
var gryffindor = document.getElementById("gryffindor");
var slytherin = document.getElementById("slytherin");
var hufflepuff = document.getElementById("hufflepuff");
var ravenclaw = document.getElementById("ravenclaw");
var hogwarts = document.getElementById("hogwarts");
var dumbledore = document.getElementById("dumbledore");
var quidditch = document.getElementById("quidditch");
var voldemort = document.getElementById("voldemort");
var boggart = document.getElementById("boggart");
var darkmark = document.getElementById("darkmark")

function aud() {
    var gryffindor = document.getElementById ("gryffindor")
    var slytherin = document.getElementById("slytherin");
    var hufflepuff = document.getElementById("hufflepuff");
    var ravenclaw = document.getElementById("ravenclaw");
    var hogwarts = document.getElementById("hogwarts");
    var dumbledore = document.getElementById("dumbledore");
    var quidditch = document.getElementById("quidditch");
    var voldemort = document.getElementById("voldemort");
    var boggart = document.getElementById("boggart");
    var darkmark = document.getElementById("darkmark")
    //Gryffindor Audio & Image
    //---------------------------
    if (randomWord === words[0]) {
        
        slytherin.pause();
        hufflepuff.pause();
        ravenclaw.pause();
        hogwarts.pause();
        dumbledore.pause();
        quidditch.pause();
        voldemort.pause();
        boggart.pause();
        darkmark.pause();
        gryffindor.play();
        document.getElementById("image"). src = "./assets/images/gryffindor.gif";
    }
    //Slytherin Audio & Image
    //---------------------------
    else if (randomWord === words[1]) {
        gryffindor.pause();
        hufflepuff.pause();
        ravenclaw.pause();
        hogwarts.pause();
        dumbledore.pause();
        quidditch.pause();
        voldemort.pause();
        boggart.pause();
        darkmark.pause();
        slytherin.play();
        document.getElementById("image").src = "./assets/images/slytherin.gif";
    }
    //Hufflepuff Audio & Image
    //---------------------------
    else if (randomWord === words[2]) {
        gryffindor.pause();
        slytherin.pause();
        ravenclaw.pause();
        hogwarts.pause();
        dumbledore.pause();
        quidditch.pause();
        voldemort.pause();
        boggart.pause();
        darkmark.pause();
        hufflepuff.play();
        document.getElementById("image").src = "./assets/images/hufflepuff.gif";
    }
    //Ravenclaw Audio & Image
    //---------------------------
    else if (randomWord === words[3]) {
        gryffindor.pause();
        slytherin.pause();
        hufflepuff.pause();
        hogwarts.pause();
        dumbledore.pause();
        quidditch.pause();
        voldemort.pause();
        boggart.pause();
        darkmark.pause();
        ravenclaw.play();
        document.getElementById("image").src = "./assets/images/ravenclaw.gif";
    }
    //Hogwarts Audio & Image
    //---------------------------
    else if (randomWord === words[4]) {
        
        gryffindor.pause();
        slytherin.pause();
        hufflepuff.pause();
        ravenclaw.pause();
        dumbledore.pause();
        quidditch.pause();
        voldemort.pause();
        boggart.pause();
        darkmark.pause();
        hogwarts.play();
        document.getElementById("image").src = "./assets/images/hogwarts.gif";
    }
    //Dumbledore Audio & Image
    //---------------------------
    else if (randomWord === words[5]) {
        gryffindor.pause();
        slytherin.pause();
        hufflepuff.pause();
        ravenclaw.pause();
        hogwarts.pause();
        quidditch.pause();
        voldemort.pause();
        boggart.pause();
        darkmark.pause();
        dumbledore.play();
        document.getElementById("image").src = "./assets/images/dumbledore.gif";
    }
    //Quidditch Audio & Image
    //---------------------------
    else if (randomWord === words[6]) {
        gryffindor.pause();
        slytherin.pause();
        hufflepuff.pause();
        ravenclaw.pause();
        hogwarts.pause();
        dumbledore.pause();
        voldemort.pause();
        boggart.pause();
        darkmark.pause();
        quidditch.play();
        document.getElementById("image").src = "./assets/images/quidditch.gif";
    }
    //Voldemort Audio & Image
    //---------------------------
    else if (randomWord === words[7]) {
        gryffindor.pause();
        slytherin.pause();
        hufflepuff.pause();
        ravenclaw.pause();
        hogwarts.pause();
        dumbledore.pause();
        quidditch.pause();
        boggart.pause();
        darkmark.pause();
        voldemort.play();
        document.getElementById("image").src = "./assets/images/voldemort.gif";
    }
    //Boggart Audio & Image
    //---------------------------
    else if (randomWord === words[8]) {
        gryffindor.pause();
        slytherin.pause();
        hufflepuff.pause();
        ravenclaw.pause();
        hogwarts.pause();
        dumbledore.pause();
        quidditch.pause();
        voldemort.pause();
        darkmark.pause();
        boggart.play();
        document.getElementById("image").src = "./assets/images/boggart.gif";
    }
    //Dark Mark Audio & Image
    //---------------------------
    else if (randomWord === words[9]) {
        gryffindor.pause();
        slytherin.pause();
        hufflepuff.pause();
        ravenclaw.pause();
        hogwarts.pause();
        dumbledore.pause();
        quidditch.pause();
        voldemort.pause();
        boggart.pause();
        darkmark.play();
        document.getElementById("image").src = "./assets/images/darkmark.gif";
    }
};

//__________________________________________________________
//RESET FUNCTION
//__________________________________________________________
function reset() {
    guessesRemaining = 9;
    wrongGuess = [];
    blanksAndCorrect = [];
    Game()
}

//__________________________________________________________
//CHECK LETTERS/COMPARE FUNCTION
//__________________________________________________________

//If/Else, to see if letter selected matches random word
function checkLetters(letter) {
    var letterInWord = false;
    //if the generated randomword is equal to the letter entered... then variable is true
    for (var i = 0; i < blanks; i++) {
        if (randomWord[i] == letter) {
            letterInWord = true;
        }
    }
    //if letterInWord (false)
    if (letterInWord) {
        //check each letter to see if it matches word
        for (var i = 0; i < blanks; i++) {
            if (randomWord[i] == letter) {
                blanksAndCorrect[i] = letter;
            }
        }
    }
    //otherwise, push the incorrect guess in the wrong guesses section, and reduce remaining guesses
    else {
        wrongGuess.push(letter);
        guessesRemaining--;
    }
    console.log(blanksAndCorrect);
}

//__________________________________________________________
//FINAL COMPLETE FUNCTION
//__________________________________________________________

//check to see if player won...
function complete() {
    console.log("wins:" + wins + "| losses:" + losses + "| guesses left:" + guessesRemaining)

    //if WON...then alert, play audio, display image and reset new round
    if (lettersOfWord.toString() == blanksAndCorrect.toString()) {
        wins++;
        aud()
        reset()
        //display wins on screen
        document.getElementById("winstracker").innerHTML = " " + wins;

        //if LOST...then alert and reset new round
    } else if (guessesRemaining === 0) {
        losses++;
        reset()
        document.getElementById("image").src = "./assets/images/lose.gif"
        document.getElementById("losstracker").innerHTML = " " + losses;
    }
    //display losses on screen && guesses remaining countdown
    document.getElementById("currentword").innerHTML = "  " + blanksAndCorrect.join(" ");
    document.getElementById("guessesremaining").innerHTML = " " + guessesRemaining;
}


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//_____________________________________________________
// EXECUTE CODE 
//_____________________________________________________

//call start game function
Game()

//check for keyup, and convert to lowercase then store in guesses
document.onkeyup = function (event) {
    var guesses = String.fromCharCode(event.keyCode).toLowerCase();
    //check to see if guess entered matches value of random word
    checkLetters(guesses);
    //process wins/loss 
    complete();
    //store player guess in console for reference 
    console.log(guesses);

    //display/store incorrect letters on screen
    document.getElementById("playerguesses").innerHTML = "  " + wrongGuess.join(" ");
}

