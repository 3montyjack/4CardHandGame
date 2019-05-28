
var ACTIONTYPES = ['SWITCH', 'SNAP', 'LOOKOWN', 'LOOKOTHER', 'SWAP', 'LOOKSWAP']

function Action (player, cardDrawn, cardOnDiscard) {
  var actionList = [];
  if (cardOnDiscard != null) {
    //SWITCH
    actionList.push(ACTIONTYPES[0]);
  }

  if (cardDrawn.value == '7' || cardDrawn.value == '8') {
    //LOOKOWN
    actionList.push(ACTIONTYPES[2]);
  }
  if (cardDrawn.value == '9' || cardDrawn.value == '10') {
    //LOOKOTHER
    actionList.push(ACTIONTYPES[3]);
  }

  if (cardDrawn.value == 'J' || cardDrawn.value == 'Q') {
    //SWAP
    actionList.push(ACTIONTYPES[4]);
  }

  if (cardDrawn.value == 'K' && (cardDrawn.suit == "C" || cardDrawn.suit == "S")) {
    //LOOKSWAP
    actionList.push(ACTIONTYPES[5]);
  }
}
