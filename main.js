var game = new Game()

//Query Selectors
var gameGrid = document.querySelector('.game-grid')
var displayWinner = document.getElementById('displayWinner')
var playerOneWinCount = document.getElementById('playerOneWinCount')
var playerTwoWinCount = document.getElementById('playerTwoWinCount')
var playerOneTurn = document.getElementById('playerOneTurn')
var playerTwoTurn = document.getElementById('playerTwoTurn')
var draw = document.getElementById('draw')
var playerOneWins = document.getElementById('player1Wins')
var playerTwoWins = document.getElementById('player2Wins')

//Event Listeners
window.addEventListener('load', onPageLoad)
gameGrid.addEventListener('click', checkBox)

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
  if (!game.game[i] && game.turn === 'X') {
      e.target.innerHTML = '🍁'
      e.preventDefault
      e.target.disabled = true
    } else if (!game.game[i] && game.turn === 'O') {
      e.target.innerHTML = '🍃'
      e.preventDefault
      e.target.disabled = true
    }
    makeAMove(e.target.id)
  }

function makeAMove(i) {
  game.takeTurn(i)
  // i.preventDefault()
    checkForDraw()
    checkForWinner()
    game.switchPlayer()
    rotatePlayerTurnText()
}

function checkForWinner() {
  if (game.checkForXWin()) {
    // displayWinner.innerHTML = 'Player 1 WINS!!!!'
    showWinner()
    show(player1Wins)
    playerOneWinCount.innerHTML = game.playerOne.addToWins()
    game.playerOne.saveWinsToStorage()
    resetBoard()
    return true
  }
  if (game.checkForOWin()) {
    showWinner()
    show(player2Wins)
    // displayWinner.innerHTML = 'Player 2 WINS!!!!'
    playerTwoWinCount.innerHTML = game.playerTwo.addToWins()
    game.playerTwo.saveWinsToStorage()
    resetBoard()
    return true
  }
}

function checkForDraw() {
    if (!game.game.includes(0)){
      // displayWinner.innerHTML = 'DRAW!'
      show(draw)
      hide(playerOneTurn)
      hide(playerTwoTurn)
      resetBoard()
    }
}

function rotatePlayerTurnText() {
  toggle(playerOneTurn)
  toggle(playerTwoTurn)
}

function show(element) {
  element.classList.remove('hidden')
}

function hide(element) {
  element.classList.add('hidden')
}


function toggle(element) {
  element.classList.toggle('hidden')
}

function showWinner(){
  hide(playerOneTurn)
  hide(playerTwoTurn)
  hide(draw)
}

function resetBoard() {
  setTimeout(resetPage, 2000)
}

function resetPage() {
  game = new Game()

  renderGame()
}

function showSavedWins() {
  playerOneWinCount.innerHTML = game.playerOne.retrieveWinsFromStorage() || 0
  playerTwoWinCount.innerHTML = game.playerTwo.retrieveWinsFromStorage() || 0
  renderGame()
}
