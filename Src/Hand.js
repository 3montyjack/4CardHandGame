function Hand(deck) {
  this.cards = [deck.drawCard(), deck.drawCard(), deck.drawCard(), deck.drawCard()];
  this.print();
};

Hand.prototype.addCard = function (card) {
  this.cards.push(card)
}

Hand.prototype.size = function() {
  return this.cards.length;
}

Hand.prototype.print = function () {
  var output = "";
  for (var i = 0; i < this.cards.length; i++) {
    output += this.cards[i].print() +'\n';
  }
  return output;
}
