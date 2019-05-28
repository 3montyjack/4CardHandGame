// These are tests to make sure the game is running well

function GameManager(numPlayers) {
  //testPlayer();
  //testCard();
  //testDeck();
  //testHand();
  this.DrawDeck = new Deck(true);
  this.DiscardDeck = new Deck(false);
  this.playerList = [];

  console.log(this.DrawDeck);
  console.log(this.DrawDeck.drawHand())
  for (var i = 0; i < numPlayers; i++) {
    this.playerList.push(new Player(("Player" + i), this.DrawDeck.drawHand()));
  }
}
