class Player {
  constructor(id, token, wins) {
    this.id = id
    this.token = token
    this.wins = 0
  }

  addToWins() {
    this.wins++
    return this.wins
  }

  saveWinsToStorage() {
    var stringifyWins = JSON.stringify(this)
    if (this.id === 'one') {
      localStorage.setItem("playerOneWins", stringifyWins)
    } else if (this.id === 'two') {
      localStorage.setItem("playerTwoWins", stringifyWins)
    }
  }
  
  retrieveWinsFromStorage() {
    if (this.id === 'one') {
      var retrievedWins = localStorage.getItem("playerOneWins")
    } else if (this.id === 'two') {
      var retrievedWins = localStorage.getItem("playerTwoWins")
    }
    var storedWins = JSON.parse(retrievedWins)
    if (storedWins) {
      this.wins = storedWins.wins
      return this.wins
    }
  }
}
