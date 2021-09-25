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

  }

  retrieveWinsFromStorage() {

  }

}
