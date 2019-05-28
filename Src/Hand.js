
function Hand(hand) {
  this.cards = hand;
};


Hand.prototype.print = function () {
  var output = ""
  for (i = 0; i < this.cards.length; i++) {
    output += this.cards[i].print() + '\n';
  }
  return output;
}
