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

  saveWinsToStorage(player){
    if (player.id === 'one'){
      var stringifyWins = JSON.stringify(player)
      localStorage.setItem("playerOneWins", stringifyWins)
  } else if (player.id === 'two') {
    var stringifyWins = JSON.stringify(player)
    localStorage.setItem("playerTwoWins", stringifyWins)
  }
}
  retrieveWinsFromStorage(player) {
    if (player.id === 'one'){
      var retrievedWins = localStorage.getItem("playerOneWins")
      var storedOneWins = JSON.parse(retrievedWins)
      this.wins = storedOneWins.wins
      return storedOneWins
    } else if (player.id === 'two'){
    var retrievedWins = localStorage.getItem("playerTwoWins")
    var storedTwoWins = JSON.parse(retrievedWins)
    this.wins = storedTwoWins.wins
  }

}
}
