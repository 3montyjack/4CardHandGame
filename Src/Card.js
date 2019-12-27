function Card(value, suit) {
  this.value = value;
  this.suit = suit;
  this.history = [];
}

Card.prototype.addHistory = function (whatHappened) {
  console.log(whatHappened);
  console.log(this.history);
}

Card.prototype.print = function () {
  return "{Card: " + this.value + ", " + this.suit + '}';
}

Card.prototype.equals = function (card) {
  return ((this.suit === card.suit) && (this.value === card.value))
}

Card.prototype.copyCard = function () {
  var tempVar = new Card(this.value, this.suit)
  tempVar.history = this.history;
  return tempVar;
}

Card.prototype.swapCard = function (card) {
  var tempVal = card.value;
  card.value = this.value;
  this.value = tempVal;
  
  tempVal = card.suit;
  card.suit = this.suit;
  this.suit = tempVal;
  
  tempVal = card.history;
  card.history = this.history;
  this.history = tempVal;
}


Card.prototype.swapEmptyCard = function() {
  var tempVar = this.copyCard();
  this.value = "";
  this.suit = "";
  this.history = {};
  return tempVar;
}

Card.prototype.knowsIdentityOfCard = function(idOfPlayer) {
  for (var i = 0; i < this.history.length; i++) {
    if (this.history.action == REVEALED && this.history.playerID == idOfPlayer) {
      return true;
    }
  }
  return false;
}

Card.prototype.isStackable = function(card) {
  return this.value == card.value;
}