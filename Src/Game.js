

function Game(numberOfPlayers, playerNames) {
    this.drawDeck = new Deck(true);
    this.discardDeck = new Deck(false);
    this.players = [];
    this.currentPlayer = 0;
    for (var i = 0; i < numberOfPlayers; i++) {
        this.players.push(new Player(this.drawDeck, i, playerNames[i]));
    }
    console.log(this.players);
}

Game.prototype.getPlayerTurn = function () {
    return this.currentPlayer;
}

Game.prototype.moveNextPlayer = function () {
    this.currentPlayer++;
    if (this.currentPlayer == this.players.length) {
        this.currentPlayer = 0;
    }
}

Game.prototype.takeTurn = function () {
    this.playerDrawOrSwap();
    this.dealWithPlayerStacking();
        console.log("Dealing with timing in line?");
    console.log("Dealing with timing in line?(Taking Action)");
    this.takeAction();
    this.moveNextPlayer();
}

Game.prototype.dealWithPlayerStacking = function() {
    var promises = [];
    for (var i = 0; i < this.players.length; i++) {
        promises.push(this.players[i].tryToStackCard(this.players));
    }
    return Promise.race(promises).then(function(results) {

        if (results != null) {
    
            var playerCard = this.players[results.playerID].hand.cards[results.cardPosition];
            
            if (playerCard.isStackable(this.discardDeck)) {
                // This grabs the card that the stacker had, replaces it with and empty card
                var tempNewCard = this.players[results.stackerID].hand.cards[cardWantedToGive].swapWithEmpty();
                // This then swaps it with the card that is getting stacked
                playerCard.swapCard(tempNewCard);
                // This then adds the card to the discard deck
                this.discardDeck.addCard(tempNewCard);
            }
        }
    
        console.log("Dealing with timing in line? (inside)")
    });
}

Game.prototype.playerDrawOrSwap = function() {
    
}
Game.prototype.takeAction = function() {

}
