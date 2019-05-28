// These are tests to make sure the game is running well

function GameManager(numPlayers) {
  //testPlayer();
  //testCard();
  //testDeck();
  //testHand();

  // TODO: Change this to deal with more than 4 players
  this.DrawDeck = new Deck(true);
  this.DiscardDeck = new Deck(false);
  this.playerList = [];
  this.activePlayer = 0;

  for (var i = 0; i < numPlayers; i++) {
    this.playerList.push(new Player(("Player" + i), this.DrawDeck.drawHand()));
  }
}

GameManager.prototype.takeTurn = function () {

  var player = this.playerList[this.activePlayer];
  document.getElementById("pt").innerHTML = player.getName();

  var discardCard = this.DiscardDeck.getTopCard();
  var drawnCard = this.DrawDeck.draw();
  console.log(discardCard);
  console.log(drawnCard);

  
  // TODO make a class for this so that it isnt required

  var action = new Action(drawnCard, discardCard);
  var actionList = action.getActions();
  var actionButtons = '';

  for (var i = 0; i < actionList.length; i++ ) {
    console.log(actionList[i])
    actionButtons += '<button onClick="doAction" value=' + actionList[i] + '>' + actionList[i] + '</button>'
  }
  console.log(actionButtons)
  document.getElementById("actionButtons").innerHTML = actionButtons;







  // Move ActivePlayer to next player

  this.activePlayer++;
  if (this.activePlayer >= this.playerList.length) {
    this.activePlayer = 0;
  }
}
