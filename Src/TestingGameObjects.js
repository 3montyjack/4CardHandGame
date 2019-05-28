
// This has integrated hand into itsself
function testPlayer() {
  console.log("______Testing Player______")
  var player1 = new Player("Player 1")

  console.log(player1.print());
}

function testCard() {
  console.log("______Testing Card______")
  var card = new Card("10", "C");
  var card2 = new Card("10", "C");
  console.log(card.print());
  console.log("Equals function: " + card.equals(card2))
  var player = new Player("Player");
  console.log("Having player look at the card");
  card.look(player);
  console.log(card.print());
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

function testHand() {
  console.log("______Testing Hand______")
  var numPlayers = 2;
  console.log("Number of players: " + numPlayers);
  var DeckDraw = new Deck(true);
  console.log("Draw Deck Stats: " + DeckDraw.print());

  var DeckDiscard = new Deck(false);
  console.log("Discard Deck Stats: " + DeckDiscard.print());

  var hands = [];

  for (var i = 0; i < numPlayers; i++) {
    // This changed
    hands.push(new Hand(DeckDraw.drawHand()));
    console.log(hands[i].print());
  }
  console.log("Draw Deck Stats: " + DeckDraw.print());

}
