class Game {
  constructor() {
    this.turn = 'X' || 'O'
    this.game = new Array(9).fill(0)
    this.playerOne = new Player('one', 'maple-leaf', 0)
    this.playerTwo = new Player('two', 'green-leaf', 0)
  }

  takeTurn(i) {
    this.game[i] = this.turn
  }

  switchPlayer() {
    if (this.turn === 'X') {
      this.turn = 'O'
      // return 'O'
    } else {
      this.turn = 'X'
      // return 'X'
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
        return true
      }
    }
  }

}
