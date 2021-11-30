console.log('Lodash is loaded:', typeof _ !== 'undefined');

var players = [{
  name: 'addy',
  hand1: null,
  hand2: null,
  score: 0
}, {
  name: 'david',
  hand1: null,
  hand2: null,
  score: 0
}, {
  name: 'jay',
  hand1: null,
  hand2: null,
  score: 0
}, {
  name: 'john',
  hand1: null,
  hand2: null,
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

players[0].hand1 = shuffledDeck[0];
players[0].hand2 = shuffledDeck[1];
players[1].hand1 = shuffledDeck[2];
players[1].hand2 = shuffledDeck[3];
players[2].hand1 = shuffledDeck[4];
players[2].hand2 = shuffledDeck[5];
players[3].hand1 = shuffledDeck[6];
players[3].hand2 = shuffledDeck[7];

// function calculateScore() {
//   for (var i = 0; i < deck.length; i++) {
//     if (deck[i].rank === 'jack') {
//       deck[i].rank = 10;
//     } else if (deck[i].rank === 'queen') {
//       deck[i].rank = 10;
//     } else if (deck[i].rank === 'king') {
//       deck[i].rank = 10;
//     } else if (deck[i].rank === 'ace') {
//       deck[i].rank = 11;
//     }
//   }
//   players[0].score = players[0].hand1.rank + players[0].hand2.rank;
//   players[1].score = players[1].hand1.rank + players[1].hand2.rank;
//   players[2].score = players[2].hand1.rank + players[2].hand2.rank;
//   players[3].score = players[3].hand1.rank + players[3].hand2.rank;
// }

// calculateScore();

function calculateScore() {
  for (var i = 0; i < players.length; i++) {
    // console.log(players[i].hand1.rank + players[i].hand2.rank);
    console.log(players[i].score);
  }
}

calculateScore();

// function decideWinner() {
//   var scores = [];
//   for (var i = 0; i < players.length; i++) {
//     scores.push(players[i].score);
//   }
//   var indexOfWinner = scores.indexOf(Math.max.apply(null, scores));
//   console.log('The winner is ' + players[indexOfWinner].name + ' with a score of ' + Math.max.apply(null, scores));
// }

// decideWinner();
