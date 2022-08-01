let score = 0;
function cc(card) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      ++score;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      --score;
      break;
  }
  document.getElementById("score").innerText = `Current Score is ${score}.`;
  if (score > 3) {
    document.getElementById("scoreAdvice").innerText = "Bet.";
  } else {
    document.getElementById("scoreAdvice").innerText = "Don't Bet!";
  }
}
