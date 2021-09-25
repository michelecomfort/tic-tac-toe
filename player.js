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

  saveWinsToStorage(){
    if (this.id === 'one'){
      var stringifyWins = JSON.stringify(this)
      localStorage.setItem("playerOneWins", stringifyWins)
  } else if (this.id === 'two') {
    var stringifyWins = JSON.stringify(this)
    localStorage.setItem("playerTwoWins", stringifyWins)
  }
}
  retrieveWinsFromStorage() {
    if (this.id === 'one'){
      var retrievedWins = localStorage.getItem("playerOneWins")
      var storedOneWins = JSON.parse(retrievedWins)
      if (storedOneWins) {
        this.wins = storedOneWins.wins
        return this.wins
      }
    } else if (this.id === 'two'){
    var retrievedWins = localStorage.getItem("playerTwoWins")
    var storedTwoWins = JSON.parse(retrievedWins)
    if (storedTwoWins){
      this.wins = storedTwoWins.wins
      return this.wins
    }
  }
}
}
