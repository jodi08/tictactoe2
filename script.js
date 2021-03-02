/* -----constants----- */
const square = document.querySelectorAll('.square')
var board = document.getElementById('board')
const messages = document.querySelector('h2')
 

/* -----app's state(variables)----- */

let currentPlayer = "X"
let nextPlayer = "O"
let playerXSelections = []
let playerOSelections = []

const winningCombinations = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7]
];

console.log(board)
/* -----cached element references----- */
const squares = Array.from(document.querySelectorAll('#board div'))


/* -----event listeners----- */

board.addEventListener('click', handleTurn)

/* -----functions----- */
function init() {
  board = [
    '', '', '',
    '', '', '',
    '', '', ''
  ];
}
init()

function render() {
  board.forEach(function(val, idx) {
    
    squares[idx].textContent = val;
  })
}
render()

function handleTurn(event) {
  const square = event.target
  square.innerHTML = currentPlayer
  let idx = squares.findIndex(function (square) {
    return square === event.target
  })
  board[idx] = currentPlayer;
  
  // turn = turn === 'X' ? 'O' : 'X';
  if (currentPlayer === 'X') {
    playerSelections = playerXSelections
    nextPlayer = 'O' 
  } else {
    playerSelections = playerOSelections
    nextPlayer = "X"
  };
  currentPlayer = nextPlayer;
  messages.textContent = `It's ${nextPlayer}'s turn`
  playerSelections.push(square)
  console.log(playerSelections)
  
}