


//Query Selectors
var gameGrid = document.querySelector('.game-grid')
var playerOneTurn = document.getElementById('playerOneTurn')
// var starIcon = document.getElementyById('starIcon')



//Event Listeners
gameGrid.addEventListener('click', changeInnerText)
playerOneTurn.addEventListener('click', changePlayerTurn)


function changeInnerText(event) {
  var changeCardText = event.target.closest('.box')
  changeCardText.innerHTML = 'X'
  toggle()
}

function toggle() {
  playerOneTurn.innerText = "Player 2 - take your turn!"
}

function changePlayerTurn(){
  toggle()
}

//if player inner text says player one,
//click will be a star on click
//else, icon w be a vote on click
