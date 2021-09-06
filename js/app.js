const qwerty = document.getElementById("qwerty");
const phrase = document. getElementById("phrase");
const startBtn = document.querySelector(".btn__reset");
let missed = 0; // tracks the number of wrong guesses the user has made

const phrases = ["This is an example phrase", 
"Bullfrogs are the largest frogs in North America", 
"This is part of project six", 
"More people have walked on the moon than won takeshis castle",
"Pink isnt a real colour and doesnt exist"
];

startBtn.addEventListener("click", () => {
    const overlay = document.querySelector(".start");
    overlay.style.display = "none";
});