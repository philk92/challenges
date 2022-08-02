const scoreOneText = document.getElementById("scoreOneText");
const scoreTwoText = document.getElementById("scoreTwoText");
const buttonOne = document.getElementById("playerOne");
const buttonTwo = document.getElementById("playerTwo");
const buttonReset = document.getElementById("Reset");
const selection = document.getElementById("maxScoreSelect");
let scoreOne = 0;
let scoreTwo = 0;

function updateScore() {
  scoreOneText.innerText = scoreOne;
  scoreTwoText.innerText = scoreTwo;
  if (scoreOne == selection.value) {
    buttonOne.disabled = true;
    buttonTwo.disabled = true;
    scoreOneText.classList.add("text-success");
    scoreTwoText.classList.add("text-error");
  } else if (scoreTwo == selection.value) {
    buttonOne.disabled = true;
    buttonTwo.disabled = true;
    scoreOneText.classList.add("text-error");
    scoreTwoText.classList.add("text-success");
  }
}

function resetScore() {
  scoreOne = 0;
  scoreTwo = 0;
  updateScore();
  buttonOne.disabled = false;
  buttonTwo.disabled = false;
  scoreOneText.classList.remove("text-error", "text-success");
  scoreTwoText.classList.remove("text-success", "text-error");
}

function addScore(player) {
  switch (player) {
    case "one":
      scoreOne++;
      break;
    case "two":
      scoreTwo++;
      break;
  }
  updateScore();
}

buttonOne.addEventListener("click", function (e) {
  addScore("one");
});

buttonTwo.addEventListener("click", function (e) {
  addScore("two");
});

buttonReset.addEventListener("click", function (e) {
  resetScore();
});

selection.addEventListener("change", function (e) {
  if (selection.value <= scoreOne || selection.value <= scoreTwo) {
    resetScore();
  }
});
