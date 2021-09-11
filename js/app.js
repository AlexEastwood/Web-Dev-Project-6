/*jshint esversion: 6 */

const qwerty = document.getElementById("qwerty");
const phrase = document. getElementById("phrase");
const startBtn = document.querySelector(".btn__reset");
let missed = 0; // tracks the number of wrong guesses the user has made
let hearts = document.getElementsByTagName("img");
let chosenLetters = [];

const phrases = ["this is an example phrase", 
"bullfrogs are the largest frogs in north america", 
"this is part of project six", 
"more people have walked on the moon than won takeshis castle",
"pink isnt a real colour and doesnt exist"
];

function getRandomPhraseAsArray(arr) {
    let randomPhrase = arr[Math.floor(Math.random() * (arr.length))];
    let phraseArray = [];
    for (let i = 0; i < randomPhrase.length; i++) {
        phraseArray[i] = randomPhrase[i];
    }
    return phraseArray;
}

function addPhraseToDisplay(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length === 1 && arr[i].toUpperCase() === arr[i].toUpperCase()) { // comparing arr[i].toUpperCase against itself .toUpperCase ensures that it's a letter
            const li = document.createElement("li");
            const node = document.createTextNode(arr[i]);
            li.appendChild(node);
            if (arr[i] === " ") {
                li.classList.add("space");
            }
            else {
                li.classList.add("letter");
            }
            const ul = document.querySelector("#phrase ul");
            ul.appendChild(li);
        }
        else {
            console.log("Invalid array entry");
        }

    }
}

function checkLetter(button) {
    let letters = phrase.querySelectorAll(".letter");
    let returnedLetter;

    letters.forEach(letter => {
        if (button === letter.innerText) {
            letter.classList.add("show");
            if (!returnedLetter) {
                returnedLetter = letter.innerText;
            }
        }
    });
    if (returnedLetter) {
        return returnedLetter;
    } else {
        return null;
    }
}

function userSelectsLetter(letter) {
    let buttons = document.getElementsByTagName("button");
    Array.from(buttons).forEach(button => {
        if (button.innerText === letter) {
            button.classList.add("chosen");
        }
    });
    let letterFound = checkLetter(letter);
    chosenLetters.push(letter);
    if (!letterFound) {
        let heartsArray = Array.from(hearts);
        heartsArray[missed].src = "images/lostHeart.png";
        missed ++;
    }
    checkWin();
}

function checkWin() {
    let shown = document.querySelectorAll(".show");
    let letters = document.querySelectorAll(".letter");
    const overlay = document.querySelector(".start");
    if (shown.length === letters.length) {
        overlay.style.display = "flex";
        overlay.classList.add("win");
    }
    else if (missed >= 5) {
        overlay.style.display = "flex";
        overlay.classList.add("lose");
    }
}

addPhraseToDisplay(getRandomPhraseAsArray(phrases));

startBtn.addEventListener("click", () => {
    const overlay = document.querySelector(".start");
    overlay.style.display = "none";
});

document.addEventListener("keydown", (e) => {
    if (!chosenLetters.includes(e.key)) {
        userSelectsLetter(e.key);
    }
    
});

qwerty.addEventListener("click", (e) => {
    if (!chosenLetters.includes(e.target.innerText) && e.target.tagName === "BUTTON") {
        userSelectsLetter(e.target.innerText);
    }   
    
});