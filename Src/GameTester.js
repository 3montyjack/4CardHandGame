// These are tests to make sure the game is running well

function GameManager() {
  testCard();
  testDeck();
  testHandSetup();
  testingPlayingHands();
  testingOneRound();
}
function testCard() {
  console.log("______Testing Card______")
  var card = new Card("10", "C");
  var card2 = new Card("10", "C");
  card.print();
  console.log("Equals function: " + card.equals(card2))
}

function testDeck() {
  console.log("______Testing Deck______")
  var numDecks = 1;
  var DeckFull = new Deck(true);
  console.log("Instanciated First Deck")
  var DeckEmpty = new Deck(false);
  console.log("Instanciated Second Deck")
  var TempCard = new Card('10', 'C');
  console.log(DeckFull.print());
  console.log(DeckEmpty.print());


  console.log("Adding Duplicate Card Check: " + !DeckFull.addCard(TempCard));


  DeckFull.removeCard(TempCard);
  console.log("Checking Remove Card: " + (DeckFull.size() == ((numDecks * 52) -1)) + " " + DeckFull.size());

  DeckEmpty.addCard(TempCard);
  console.log("Checking Adding Card To Empty: " + (DeckEmpty.size() == 1) + " " + DeckEmpty.size());

}

function testHandSetup() {
  console.log("______Testing Hand Setup______")
  var numPlayers = 2;
  console.log("Number of players: " + numPlayers);
  var DeckDraw = new Deck(true);
  console.log("Draw Deck Stats: " + DeckDraw.print());
  
  var DeckDiscard = new Deck(false);
  console.log("Discard Deck Stats: " + DeckDiscard.print());
  
  var hands = [];
  
  for (var i = 0; i < numPlayers; i++) {
    hands.push(new Hand(DeckDraw));
    console.log(hands[i].print());
  }
  console.log("Draw Deck Stats: " + DeckDraw.print());
  console.log("Discard Deck Stats: " + DeckDiscard.print());
}

function testingPlayingHands() {
  console.log("______Testing Playing Action______")
  var numPlayers = 4;
  var playerNames = ["A", "B", "C", "D"];

  var game = new Game(numPlayers, playerNames);

  console.log("Taking turn for player " + game.currentPlayer.toString())
  result = game.takeTurn();
  console.log("Finished Player " + game.currentPlayer.toString() + "'s turn")

}

function testingOneRound() {

  console.log("______Testing One Round Of Actions______")
  // TODO generate custom deck to test
  var numPlayers = 4;
  var playerNames = ["A", "B", "C", "D"];

  var game = new Game(numPlayers, playerNames);

  for (var i = 0; i < numPlayers; i++) {

    console.log("Taking turn for player " + game.currentPlayer.toString())
    result = game.takeTurn();
    console.log("Finished Player " + game.currentPlayer.toString() + "'s turn")
  }
}
