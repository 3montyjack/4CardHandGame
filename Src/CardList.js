
// 10 is represented as 1 for the sake of displaying the data more consistantly
const DECKVALUES = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '1', 'J', 'Q', 'K'];
const SUIT = ['H', 'S', 'C', 'D'];
const JOKER = ['0','J']


function generateList() {
  var list = [];
  for (var j = 0; j < SUIT.length; j ++) {
    for (var i = 0; i < DECKVALUES.length; i ++) {
      list.push(new Card(DECKVALUES[i],SUIT[j]));
    }
  }
  list.push(new Card(JOKER[0], JOKER[1]));
  list.push(new Card(JOKER[0], JOKER[1]));
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
