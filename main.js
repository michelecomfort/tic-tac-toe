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
var gameResetButton = document.getElementById('gameReset')

//Event Listeners
window.addEventListener('load', onPageLoad)
gameGrid.addEventListener('click', checkBox)
gameResetButton.addEventListener('click', resetGame)

function onPageLoad() {
  showSavedWins()
}

function renderGame() {
  gameGrid.innerHTML = ''
  gameGrid.innerHTML +=
    `<div class='game-boxes zero enable-click' id=0></div>
    <div class='game-boxes one enable-click' id=1></div>
    <div class='game-boxes two enable-click' id=2></div>
    <div class='game-boxes three enable-click' id=3></div>
    <div class='game-boxes four enable-click' id=4></div>
    <div class='game-boxes five enable-click' id=5></div>
    <div class='game-boxes six enable-click' id=6></div>
    <div class='game-boxes seven enable-click' id=7></div>
    <div class='game-boxes eight enable-click' id=8></div>`
}

function checkBox(e) {
  var i = e.target.id
  if (!game.checkForXWin() && !game.checkForOWin()) {
    changeLeaf(e)
  }
}

function changeLeaf(e){
  var i = e.target.id
  if (!game.game[i] && game.turn === 'X') {
    e.target.innerHTML = '🍁'
  } else if (!game.game[i] && game.turn === 'O') {
    e.target.innerHTML = '🍃'
  }
  makeAMove(e.target.id)
  disableClick(e)
}

function disableClick(e) {
  e.target.classList.add('disable-click')
  e.target.classList.remove('enable-click')
}

function makeAMove(i) {
  game.takeTurn(i)
  if (!determineXWin() && !determineOWin()) {
    game.switchPlayer()
    rotatePlayerTurnText()
    checkForDraw()
  }
}

function determineXWin() {
  if (game.checkForXWin()) {
    hideHeadings()
    show(player1Wins)
    playerOneWinCount.innerHTML = game.playerOne.addToWins()
    game.playerOne.saveWinsToStorage()
    resetBoard()
    return true
  }
}

function determineOWin(){
  if (game.checkForOWin()) {
    hideHeadings()
    show(player2Wins)
    playerTwoWinCount.innerHTML = game.playerTwo.addToWins()
    game.playerTwo.saveWinsToStorage()
    resetBoard()
    return true
  }

}

function checkForDraw() {
  if (!game.game.includes(0)) {
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

function toggle(element) {
  element.classList.toggle('hidden')
}

function show(element) {
  element.classList.remove('hidden')
}

function hide(element) {
  element.classList.add('hidden')
}

function hideHeadings() {
  hide(playerOneTurn)
  hide(playerTwoTurn)
  hide(draw)
}

function renderHeading() {
  hide(playerTwoTurn)
  hide(draw)
  hide(player2Wins)
  hide(player1Wins)
  show(playerOneTurn)
}

function resetBoard() {
  setTimeout(resetPage, 2000)
}

function resetPage() {
  game = new Game()
  renderHeading()
  showSavedWins()
  renderGame()
}

function resetGame() {
  localStorage.clear()
  resetPage()

}

function showSavedWins() {
  playerOneWinCount.innerHTML = game.playerOne.retrieveWinsFromStorage() || 0
  playerTwoWinCount.innerHTML = game.playerTwo.retrieveWinsFromStorage() || 0
  renderGame()
}
