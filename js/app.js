const qwerty = document.getElementById("qwerty");
const phrase = document. getElementById("phrase");
const startBtn = document.querySelector(".btn__reset");
let missed = 0; // tracks the number of wrong guesses the user has made

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
    let letters = document.querySelectorAll(".letter");
    let returnedLetter = "";

    letters.forEach(letter => {
        if (button === letter.innerText) {
            letter.classList.add("show");
            if (returnedLetter === "") {
                returnedLetter = letter.innerText;
            }
        }
    })
    if (returnedLetter) {
        return returnedLetter;
    } else {
        return null;
    }
}

addPhraseToDisplay(getRandomPhraseAsArray(phrases));



startBtn.addEventListener("click", () => {
    const overlay = document.querySelector(".start");
    overlay.style.display = "none";
});

document.addEventListener("keydown", (e) => {
    for (button in document.querySelectorAll("button")) {
        if (button.innerText === e.key) {
            button.classList.add("chosen");
        }
    }
    let letterFound = checkLetter(e.key);
})