console.log('Lodash is loaded:', typeof _ !== 'undefined');

var players = [{
  name: 'addy',
  hand: [],
  score: 0
}, {
  name: 'david',
  hand: [],
  score: 0
}, {
  name: 'jay',
  hand: [],
  score: 0
}, {
  name: 'john',
  hand: [],
  score: 0
}];

var suits = ['clubs', 'diamonds', 'hearts', 'spades'];
var ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];

function generateDeck() {
  var deck = [];
  for (var i = 0; i < suits.length; i++) {
    for (var j = 0; j < ranks.length; j++) {
      var card = {
        suit: suits[i],
        rank: ranks[j]
      };
      deck.push(card);
    }
  }
  return deck;
}

var shuffledDeck = _.shuffle(generateDeck());

players[0].hand[0] = shuffledDeck[0];
players[0].hand[1] = shuffledDeck[1];
players[1].hand[0] = shuffledDeck[2];
players[1].hand[1] = shuffledDeck[3];
players[2].hand[0] = shuffledDeck[4];
players[2].hand[1] = shuffledDeck[5];
players[3].hand[0] = shuffledDeck[6];
players[3].hand[1] = shuffledDeck[7];

function calculateScore() {
  for (var i = 0; i < players.length; i++) {
    players[i].score = players[i].hand[0].rank + players[i].hand[1].rank;
    if (typeof players[i].score === 'string') {
      var playerScoreSplit = players[i].score.split('');
      for (var j = 0; j < playerScoreSplit.length; j++) {
        if (playerScoreSplit[j] === 'J') {
          playerScoreSplit[j] = 10;
        } else if (playerScoreSplit[j] === 'Q') {
          playerScoreSplit[j] = 10;
        } else if (playerScoreSplit[j] === 'K') {
          playerScoreSplit[j] = 10;
        } else if (playerScoreSplit[j] === 'A') {
          playerScoreSplit[j] = 11;
        } else if (typeof playerScoreSplit[j] !== 'number') {
          playerScoreSplit[j] = parseInt(playerScoreSplit[j]);
        }
      }
      if (playerScoreSplit[0] === 1) {
        playerScoreSplit = [10, playerScoreSplit[2]];
      } else if (playerScoreSplit[1] === 1) {
        playerScoreSplit = [playerScoreSplit[0], 10];
      }
      players[i].score = playerScoreSplit[0] + playerScoreSplit[1];
    } else {
      players[i].score = Number(players[i].score);
    }
  }
}

calculateScore();

function decideWinner() {
  var scores = [];
  for (var i = 0; i < players.length; i++) {
    scores.push(players[i].score);
  }
  var indexOfWinner = scores.indexOf(Math.max.apply(null, scores));
  console.log('The winner is ' + players[indexOfWinner].name + ' with a score of ' + Math.max.apply(null, scores));
}

decideWinner();
