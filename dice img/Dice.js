const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const score1Element = document.querySelector("#score1");
const score2Element = document.querySelector("#score2");
const currentScore1 = document.querySelector("#current1");
const currentScore2 = document.querySelector("#current2");
const diceElement = document.querySelector(".dice");
const newGmaeButton = document.querySelector("#btn1");
const rollButton = document.querySelector("#btn2");
const holdButton = document.querySelector("#btn3");

let scores, currentScore, activePlayer, playing;

const init = () => {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  score1Element.textContent = 0;
  score2Element.textContent = 0;
  currentScore1.textContent = 0;
  currentScore2.textContent = 0;
 

  diceElement.classList.add("hidden");
  player1.classList.remove(`player-winner`);
  player2.classList.remove(`player-winner`);
  player1.classList.add(`player-active`);
  player2.classList.remove(`player-active`);
};

init();

//functions ===>

const switchPlayer = () => {
  document.getElementById(`current-${activePlayer} + 1`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player1.classList.toggle(`player-active`);
  player2.classList.toggle(`player-active`);
};
let dice1
let dice2 
//button roll function
rollButton.addEventListener("click", function () {
  //generate a random dice number
  if (playing) {
    dice1 = Math.floor(Math.random() * 6) + 1;
    dice2 = Math.floor(Math.random() * 6) + 1;

  }
});

//display dice
diceElement.src = `dice-${dice1}.png`;
diceElement.classList.remove(`hidden`);

diceElement.src = `dice-${dice2}.png`;
diceElement.classList.remove(`hidden`);

if (dice1 === dice2) {
  currentScore += dice1 + dice2;
  console.log(activePlayer);
  document.getElementById(`current-${activePlayer +1}`).textContent = currentScore;
} else {
  switchPlayer();
}

//hold

holdButton.addEventListener("click", function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score-${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 100) {
      diceElement.classList.add(`hidden`);
      playing = false;
      document
        .querySelector(`.player-${activePlayer}`)
        .classList.add(`player-winner`);
      document
        .querySelector(`.player-${activePlayer}`)
        .classList.remove(`player-active`);
    } else {
      switchPlayer();
    }
  }
});

newGmaeButton.addEventListener('click', function () {
  init();
});
