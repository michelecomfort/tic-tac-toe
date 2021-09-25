class Game {
  constructor() {
    this.turn = 'X' || 'O'
    this.game = new Array(9).fill('')
  }

  takeTurn(i) {
    this.game[i] = this.turn
  }

  switchPlayer() {
    if (this.turn === 'X') {
      this.turn = 'O'
      return 'O'
    } else {
      this.turn = 'X'
      return 'X'
    }
  }

  checkForXWin() {
    for (var i = 0; i < this.game.length; i++) {
      if (this.game[0] === 'X' && this.game[1] === 'X' && this.game[2] === 'X' ||
        this.game[3] === 'X' && this.game[4] === 'X' && this.game[5] === 'X' ||
        this.game[6] === 'X' && this.game[7] === 'X' && this.game[8] === 'X' ||
        this.game[0] === 'X' && this.game[3] === 'X' && this.game[6] === 'X' ||
        this.game[1] === 'X' && this.game[4] === 'X' && this.game[7] === 'X' ||
        this.game[2] === 'X' && this.game[5] === 'X' && this.game[8] === 'X' ||
        this.game[0] === 'X' && this.game[4] === 'X' && this.game[8] === 'X' ||
        this.game[2] === 'X' && this.game[4] === 'X' && this.game[6] === 'X') {
        console.log('Player 1 Wins')
        return true
      }
    }
  }

  checkForOWin() {
    for (var i = 0; i < this.game.length; i++) {
      if (this.game[0] === 'O' && this.game[1] === '0' && this.game[2] === 'O' ||
        this.game[3] === 'O' && this.game[4] === 'O' && this.game[5] === 'O' ||
        this.game[6] === 'O' && this.game[7] === 'O' && this.game[8] === 'O' ||
        this.game[0] === 'O' && this.game[3] === 'O' && this.game[6] === 'O' ||
        this.game[1] === 'O' && this.game[4] === 'O' && this.game[7] === 'O' ||
        this.game[2] === 'O' && this.game[5] === 'O' && this.game[8] === 'O' ||
        this.game[0] === 'O' && this.game[4] === 'O' && this.game[8] === 'O' ||
        this.game[2] === 'O' && this.game[4] === 'O' && this.game[6] === 'O') {
        console.log('Player 2 Wins')
        return true
      }
    }
  }

  checkForWin(currentCombo) {
    var winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
    for (var i = 0; i < winningCombos.length; i++) {
      for (var k = 0; k < winningCombos[i].length; k++) {
        // console.log(winningCombos[i][k])
        // console.log("test",winningCombos[i][k])
        if (winningCombos[i][k] === this.game[winningCombos[i][k]]) {
          // console.log(this.game[winningCombos[i][k]])
          // console.log('win')
        }
      }
      //is 0 equal to 1 & 2
      //checking array equality LOOK UP
    }
  }
}
