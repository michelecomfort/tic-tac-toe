var game = new Game()
//Query Selectors
var gameGrid = document.querySelector('.game-grid')
var playerOneTurn = document.getElementById('playerOneTurn')
var zero = document.getElementById('zero')
var one = document.getElementById('one')
var two = document.getElementById('two')
var three = document.getElementById('three')
var four = document.getElementById('four')
var five = document.getElementById('five')
var six = document.getElementById('six')
var seven = document.getElementById('seven')
var eight = document.getElementById('eight')
// var starIcon = document.getElementyById('starIcon')



//Event Listeners
window.addEventListener('load', onPageLoad)
gameGrid.addEventListener('click', checkBox)
playerOneTurn.addEventListener('click', changePlayerTurn)

function onPageLoad() {
  renderGame()
}

function renderGame() {
  var playerToken;

  gameGrid.innerHTML = ''
  gameGrid.innerHTML += `
    <div class='game-boxes zero' id=0>0</div>
    <div class='game-boxes one' id=1>1</div>
    <div class='game-boxes two' id=2>2</div>
    <div class='game-boxes three' id=3>3</div>
    <div class='game-boxes four' id=4>4</div>
    <div class='game-boxes five' id=5>5</div>
    <div class='game-boxes six' id=6>6</div>
    <div class='game-boxes seven' id=7>7</div>
    <div class='game-boxes eight' id=8>8</div>
`
}

function checkBox(e) {
  var i = e.target.id
  if (game.game[i] === '') {
    if (game.turn === 'X') {
      e.target.innerHTML = 'X'
    } else if (game.turn === 'O') {
      e.target.innerHTML = 'O'
    }
    makeAMove(e.target.id)
  }
}


function makeAMove(i) {

  game.takeTurn(i)
  game.checkForEquality()
  game.switchPlayer()
  
  console.log(game)
}





//
// function changeInnerText(event) {
//   var playerToken;
//   var changeCardText = event.target.closest('.box')
//   changeCardText.innerHTML = 'X'
//   toggle()
// }

function toggle() {
  playerOneTurn.classList.add('hidden')
  playerTwoTurn.classList.remove('hidden')
}

function changePlayerTurn() {
  toggle()
}

//if player inner text says player one,
//click will be a star on click
//else, icon w be a vote on click
