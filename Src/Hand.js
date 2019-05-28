
function Hand(card1, card2, card3, card4) {
  this.cards = [card1, card2, card3, card4];
};


Hand.prototype.print = function () {
  var output = ""
  for (i = 0; i < this.cards.length; i++) {
    output += this.cards[i].print() + '\n';
  }
  return output;
}
