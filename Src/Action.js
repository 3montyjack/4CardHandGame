
var ACTIONTYPES = ['SWITCH', 'SNAP', 'LOOKOWN', 'LOOKOTHER', 'SWAP', 'LOOKSWAP']

function Action (cardDrawn, cardOnDiscard) {
  this.actionList = [];
  if (cardOnDiscard != null) {
    //SWITCH
    this.actionList.push(ACTIONTYPES[0]);
  }

  if (cardDrawn.value == '7' || cardDrawn.value == '8') {
    //LOOKOWN
    this.actionList.push(ACTIONTYPES[2]);
  }
  if (cardDrawn.value == '9' || cardDrawn.value == '10') {
    //LOOKOTHER
    this.actionList.push(ACTIONTYPES[3]);
  }

  if (cardDrawn.value == 'J' || cardDrawn.value == 'Q') {
    //SWAP
    this.actionList.push(ACTIONTYPES[4]);
  }

  if (cardDrawn.value == 'K' && (cardDrawn.suit == "C" || cardDrawn.suit == "S")) {
    //LOOKSWAP
    this.actionList.push(ACTIONTYPES[5]);
  }
}

Action.prototype.getActions = function () {
  return this.actionList
};

Action.prototype.takeAction = function (drawDeck, discardDeck, actionName, handInfo) {
  // Hand Info layout
  // firstHand, secondHand, handLocation1, handLocation2
  return "WIP"
}
