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
    var stringifyWins = JSON.stringify(player)
    localStorage.setItem("playerWins", stringifyWins)
  }

  retrieveWinsFromStorage() {
    var retrievedWins = localStorage.getItem("playerWins")
    var storedWins = JSON.parse(retrievedWins)
  }

}
