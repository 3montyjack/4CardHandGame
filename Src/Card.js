function Card(value, suit) {
  this.value = value;
  this.suit = suit;
  this.history = {};
}

Card.prototype.addHistory = function (whatHappened) {
  console.log(whatHappened);
  console.log(this.history);
}

Card.prototype.print = function () {
  console.log("Card: " + this.value + ", " + this.suit);
}

Card.prototype.equals = function (card) {
  return ((this.suit === card.suit) && (this.value === card.value))
}
