
/**
 * @param {Deck} drawDeck Deck to draw from
 * @param {int} id the integer id of the player
 * @param {string} name the name of the player
 */
function Player(drawDeck, id, name) {
    this.hand = new Hand(drawDeck);
    this.id = id;
    this.name = name;
}


Player.prototype.tryToStackCard = async function(players, cardOnTop) {
    var playerHand = -1;
    var handPosition = -1;
    for (var i = 0; i > players.length; i++) {
        var tempHand = players[i].hand;
        for (var j = 0; j < tempHand.cards.length; j++) {
            if(cardOnTop.isStackable(tempHand.cards[j])) {

            }
        }
    }    
    console.log("Doing Things inside player " + this.id.toString());
    // TODO make a wait for the cpu, and add support for actual player
    if (playerHand != -1) {
        console.log("Doing Things inside player " + this.id.toString());
        return Promise.resolve(new StackPositions(playerHand,handPosition,this.id,this.decideWhatCardToSwap()));
    }else {
        setTimeout(function() {
            return Promise.resolve();
        }, 1000);
    }
} 


Player.prototype.knowsIdentityOfCard = function (idOfPlayer, idOfCard) {

}

Player.prototype.decideWhatCardToSwap = function() {
    // TODO finish what this will be
    return 0;
}