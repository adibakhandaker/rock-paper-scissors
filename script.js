const choices = document.querySelectorAll(".choice");
const resultDiv = document.getElementById("result");
const userScoreSpan = document.getElementById("user-score");
const compScoreSpan = document.getElementById("comp-score");

let userScore = 0;
let compScore = 0;

choices.forEach(button => {
  button.addEventListener("click", () => {
    const userChoice = button.dataset.choice;
    const compChoice = getComputerChoice();
    const result = getResult(userChoice, compChoice);
    updateScore(result);
    showResult(userChoice, compChoice, result);
  });
});

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function getResult(user, comp) {
  if (user === comp) return "draw";
  if (
    (user === "rock" && comp === "scissors") ||
    (user === "paper" && comp === "rock") ||
    (user === "scissors" && comp === "paper")
  ) {
    return "win";
  }
  return "lose";
}

function updateScore(result) {
  if (result === "win") userScore++;
  else if (result === "lose") compScore++;
  userScoreSpan.textContent = userScore;
  compScoreSpan.textContent = compScore;
}

const userPickedDiv = document.getElementById("user-picked");
const compPickedDiv = document.getElementById("comp-picked");

const icons = {
  rock: "✊",
  paper: "✋",
  scissors: "✌️",
};

function showResult(user, comp, result) {
  // Show picked icons
  userPickedDiv.textContent = icons[user];
  compPickedDiv.textContent = icons[comp];

  let msg = "";
  if (result === "win") {
    msg = "🎉 You win!";
    resultDiv.className = "result win";
  } else if (result === "lose") {
    msg = "😢 You lose!";
    resultDiv.className = "result lose";
  } else {
    msg = "😐 It's a draw.";
    resultDiv.className = "result draw";
  }
  resultDiv.textContent = msg;
}


