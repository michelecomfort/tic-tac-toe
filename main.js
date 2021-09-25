var game = new Game()
var playerOne = new Player('one', 'maple-leaf', 0)
var playerTwo = new Player('two', 'green-leaf', 0)

//Query Selectors
var gameGrid = document.querySelector('.game-grid')
var zero = document.getElementById('zero')
var one = document.getElementById('one')
var two = document.getElementById('two')
var three = document.getElementById('three')
var four = document.getElementById('four')
var five = document.getElementById('five')
var six = document.getElementById('six')
var seven = document.getElementById('seven')
var eight = document.getElementById('eight')
var displayWinner = document.getElementById('displayWinner')
var playerOneWins = document.getElementById('playerOneWins')
var playerTwoWins = document.getElementById('playerTwoWins')
var playerOneTurn = document.getElementById('playerOneTurn')
var playerTwoTurn = document.getElementById('playerTwoTurn')



//Event Listeners
window.addEventListener('load', onPageLoad)
gameGrid.addEventListener('click', checkBox)



//functions
function onPageLoad() {
  showSavedWins()
}

function renderGame() {
  gameGrid.innerHTML = ''
  gameGrid.innerHTML +=
    `<div class='game-boxes zero' id=0></div>
    <div class='game-boxes one' id=1></div>
    <div class='game-boxes two' id=2></div>
    <div class='game-boxes three' id=3></div>
    <div class='game-boxes four' id=4></div>
    <div class='game-boxes five' id=5></div>
    <div class='game-boxes six' id=6></div>
    <div class='game-boxes seven' id=7></div>
    <div class='game-boxes eight' id=8></div>`
}

function checkBox(e) {
  var i = e.target.id
  if (game.game[i] === '') {
    if (game.turn === 'X') {
      e.target.innerHTML = '🍁'
    } else if (game.turn === 'O') {
      e.target.innerHTML = '🍃'
    }
    makeAMove(e.target.id)
  }
}


function makeAMove(i) {
  game.takeTurn(i)
  checkForWinner()
  game.switchPlayer()
  rotatePlayerTurnText()
}


function rotatePlayerTurnText() {
  toggle(playerOneTurn)
  toggle(playerTwoTurn)
}

function toggle(element) {
  element.classList.toggle('hidden')
}

function checkForWinner() {
  if (game.checkForXWin()) {
    displayWinner.innerHTML = 'Player One WINS!!!!'
    playerOneWins.innerHTML = playerOne.addToWins()
    // resetBoard()
    playerOne.saveWinsToStorage(playerOne)
  }
  if (game.checkForOWin()) {
    displayWinner.innerHTML = 'Player Two WINS!!!!'
    playerTwoWins.innerHTML = playerTwo.addToWins()
    // resetBoard()
    playerOne.saveWinsToStorage(playerTwo)
  }
}

// function resetBoard() {
//   setTimeout(renderGame, 3000)
//   // renderGame()
// }

function showSavedWins() {
  var retrievedWins = localStorage.getItem("playerOneWins")
  var storedOneWins = JSON.parse(retrievedWins)
  // playerOne.retrieveWinsFromStorage(playerOne)
    if (storedOneWins) {
      playerOne.wins = storedOneWins.wins
      playerOneWins.innerHTML = storedOneWins.wins
  }
  var retrievedWins = localStorage.getItem("playerTwoWins")
  var storedTwoWins = JSON.parse(retrievedWins)
    if (storedTwoWins) {
      playerTwo.wins = storedTwoWins.wins
      playerTwoWins.innerHTML = storedTwoWins.wins
  }
  renderGame()
}
