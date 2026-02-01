let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameActive = true;

const statusText = document.getElementById("status");

const winningConditions = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];

function play(index) {
  if (board[index] !== "" || !gameActive) return;

  board[index] = currentPlayer;
  document.getElementsByClassName("cell")[index].innerText = currentPlayer;

  checkWinner();
}

function checkWinner() {
  let won = false;

  for (let condition of winningConditions) {
    let [a, b, c] = condition;
    if (
      board[a] &&
      board[a] === board[b] &&
      board[a] === board[c]
    ) {
      won = true;
      break;
    }
  }

  if (won) {
    statusText.innerText = `Player ${currentPlayer} Wins 🎉`;
    gameActive = false;
  } else if (!board.includes("")) {
    statusText.innerText = "It's a Draw 🤝";
    gameActive = false;
  } else {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusText.innerText = `Player ${currentPlayer}'s Turn`;
  }
}

function reset() {
  board = ["", "", "", "", "", "", "", "", ""];
  gameActive = true;
  currentPlayer = "X";
  statusText.innerText = "Player X's Turn";
  document.querySelectorAll(".cell").forEach(cell => cell.innerText = "");
}
