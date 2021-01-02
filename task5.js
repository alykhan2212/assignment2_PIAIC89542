let randomNum = Math.floor(Math.random() * 10 + 1);
let input = parseInt(prompt("Guess number between 1 and 10: "));

if (input == randomNum) {
  alert("Bingo! Correct answer");
}
else if (input === randomNum + 1) {
  alert("Close enough to the correct answer");
}
else {
  alert("WRONG ANSWER! let's try it again");
}