let userScore = parseInt("0");
let computerScore = parseInt("0");
let scoreString = userScore.toString() + " - " + computerScore.toString();
let computerChoice = "";
function game(userInput) {
  let computerRandom = Math.floor(Math.random() * 3 + 1);
  switch (computerRandom) {
    case 1:
      computerChoice = "Rock";
      break;
    case 2:
      computerChoice = "Scissors";
      break;
    case 3:
      computerChoice = "Paper";
      break;
  }
  // 1 win, 2 loose, 3 draw

  if (userInput === "Scissors" && computerChoice === "Paper") {
    score(1);
  } else if (userInput === "Scissors" && computerChoice === "Rock") {
    score(2);
  } else if (userInput === "Scissors" && computerChoice === "Scissors") {
    score(3);
  } else if (userInput === "Rock" && computerChoice === "Paper") {
    score(2);
  } else if (userInput === "Rock" && computerChoice === "Rock") {
    score(3);
  } else if (userInput === "Rock" && computerChoice === "Scissors") {
    score(1);
  } else if (userInput === "Paper" && computerChoice === "Paper") {
    score(3);
  } else if (userInput === "Paper" && computerChoice === "Rock") {
    score(1);
  } else if (userInput === "Paper" && computerChoice === "Scissors") {
    score(2);
  }
}
function showButton() {
  let x = document.getElementById("restart");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function score(outcom) {
  switch (outcom) {
    case 1:
      ++userScore;
      document.getElementById(
        "gameOutcome"
      ).innerHTML = `You Win - Computer choosed ${computerChoice}!`;
      scoreString = userScore.toString() + " - " + computerScore.toString();
      document.getElementById("userScore").innerHTML = scoreString;
      break;
    case 2:
      ++computerScore;
      document.getElementById(
        "gameOutcome"
      ).innerHTML = `You Lose -  Computer choosed ${computerChoice}!`;
      scoreString = userScore.toString() + " - " + computerScore.toString();
      document.getElementById("userScore").innerHTML = scoreString;
      break;
    case 3:
      document.getElementById(
        "gameOutcome"
      ).innerHTML = `Draw - Computer choosed ${computerChoice}!`;
      break;
  }
  if (userScore > 4) {
    const ele = document.getElementById("container");
    document.getElementById("container");
    ele.remove();
    showButton();
    document.getElementById("newGame").innerText = "YOU WIN!";
    document.getElementById(
      "finalScore"
    ).innerText = `Final Score is ${scoreString}`;
  } else if (computerScore > 4) {
    const ele = document.getElementById("container");
    document.getElementById("container");
    ele.remove();
    showButton();
    document.getElementById("newGame").innerText = "YOU LOSE!";
    document.getElementById(
      "finalScore"
    ).innerText = `Final Score is ${scoreString}`;
  }
}
