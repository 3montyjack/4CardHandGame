function Player(name, hand) {
  this.name = name
  this.hand = new Hand(hand);
}


Player.prototype.print = function () {
  return "Name: " + this.name;
}

Player.prototype.getName = function () {
  return this.name;
}
