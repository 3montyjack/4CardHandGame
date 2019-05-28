function Card(value, suit) {
  this.value = value;
  this.suit = suit;
  this.listOfPlayers = [];
  this.history = {};
}

Card.prototype.addHistory = function (whatHappened) {
  console.log(whatHappened);
  console.log(this.history);
}

Card.prototype.print = function () {
  var output = "Card: " + this.value + ", " + this.suit + '\n';
  output += "Players Who Have Seen This Card: \n";
  for (var i = 0; i < this.listOfPlayers.length; i++) {
    output += this.listOfPlayers[i].name
    if (i != (this.listOfPlayers.length -1)) {
      output += " , "
    }
  }
  return output + '\n';
}

Card.prototype.equals = function (card) {
  return ((this.suit === card.suit) && (this.value === card.value))
}

Card.prototype.look = function (player) {
  for (var i = 0; i < this.listOfPlayers.length; i++) {
    if (player.getName() == this.listOfPlayers[i].getName()) {
      return "You have seen this card allready"
    }
  }
  this.listOfPlayers.push(player);
  return player.getName() + " Looked At The Card"
}
