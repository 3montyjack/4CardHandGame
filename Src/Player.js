function Player(name) {
  this.name = name
}


Player.prototype.print = function () {
  return "Name: " + this.name;
}

Player.prototype.getName = function () {
  return this.name;
}
