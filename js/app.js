const qwerty = document.getElementById("qwerty");
const phrase = document. getElementById("phrase");
const startBtn = document.querySelector(".btn__reset");
let missed = 0; // tracks the number of wrong guesses the user has made

startBtn.addEventListener("click", () => {
    const overlay = document.querySelector(".start");
    overlay.style.display = "none";
});