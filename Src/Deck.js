function Deck(full) {
  if (full) {
    this.list = generateList();
    shuffleDeck(this.list);
  } else {
    this.list = generateEmptyList();
  }
};

Deck.prototype.draw = function () {
  return this.list.pop();
}

Deck.prototype.removeCard = function(card) {
  var temp;
  for (var i = 0; i < this.list.length; i++) {
    if (this.list[i].suit == card.suit && this.list[i].value == card.value) {
      temp = this.list[i];
      this.list.splice(i, 1);
    }
  }
  return [this.list, temp];
};


Deck.prototype.addCard = function(card) {
  // Find the card in the deck
  for (var i = 0; i < this.list.length; i++) {
    //console.log(this.list[i].suit + " " + card.suit + " " + this.list[i].value + " " + card.value)
    if (this.list[i].suit == card.suit && this.list[i].value == card.value) {
      return false;
    }
  }

  this.list.push(card);
  shuffleDeck(this.list);
  return this.list;
};

Deck.prototype.size = function () {
  return this.list.length
}

Deck.prototype.print = function() {
  return ("Size: " + this.list.length);
};
