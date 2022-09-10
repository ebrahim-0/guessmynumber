let secretNumber = Math.trunc(Math.random() * 20) + 1;

let check = document.querySelector(".check");
let number = document.querySelector(".number");
let secret = document.querySelector(".secret");
let message = document.querySelector(".message");
let score = document.querySelector(".score");
let high = document.querySelector(".high");
let again = document.querySelector(".again");

check.addEventListener("click", function () {
  if (secretNumber != number.value) {
    score.innerHTML -= 1;
  }
  if (secretNumber == number.value) {
    secret.textContent = secretNumber;
  }
  if (number.value > secretNumber) {
    document.querySelector(".message").textContent = "📈 Too high!";
  } else if (number.value < secretNumber) {
    document.querySelector(".message").textContent = "📉 Too low!";
  } else if (secretNumber == number.value) {
    document.querySelector(".message").textContent = "🎉 Correct Number!";
    document.body.style.backgroundColor = "#60b347";
    high.innerHTML = score.innerHTML;
  }
  if (score.innerHTML == 0) {
    document.querySelector(".message").textContent = "💥 You lost the game!";
  }
});
again.addEventListener("click", function () {
  document.body.style.backgroundColor = "#222";
  score.innerHTML = 20;
  document.querySelector(".message").textContent = "Start guessing...";
  secret.textContent = "?";
  number.value = "";
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
