
const DECKVALUES = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
const SUIT = ['H', 'S', 'C', 'D'];


function generateList() {
  var list = [];
  for (var j = 0; j < SUIT.length; j ++) {
    for (var i = 0; i < DECKVALUES.length; i ++) {
      list.push(new Card(DECKVALUES[i],SUIT[j]))
    }
  }
  return list;
}

function generateEmptyList() {
  var list = [];
  return list;
}

function shuffleDeck(list) {
  for (var i = list.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = list[i];
      list[i] = list[j];
      list[j] = temp;
  }
  return list;
}
