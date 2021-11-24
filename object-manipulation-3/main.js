console.log('Lodash is loaded:', typeof _ !== 'undefined');

var players = [{
  name: 'addy',
  hand1: null,
  hand2: null
}, {
  name: 'david',
  hand1: null,
  hand2: null
}, {
  name: 'jay',
  hand1: null,
  hand2: null
}, {
  name: 'john',
  hand1: null,
  hand2: null
}];

// var deck = [{ rank: 2, suit: 'clubs' }, { rank: 3, suit: 'clubs' }, { rank: 4, suit: 'clubs' }, { rank: 5, suit: 'clubs' }, { rank: 6, suit: 'clubs' }, { rank: 7, suit: 'clubs' }, { rank: 8, suit: 'clubs' }, { rank: 9, suit: 'clubs' }, { rank: 10, suit: 'clubs' }, { rank: 'jack', suit: 'clubs' }, { rank: 'queen', suit: 'clubs' }, { rank: 'king', suit: 'clubs' }, { rank: 'ace', suit: 'clubs' },
//   { rank: 2, suit: 'diamonds' }, { rank: 3, suit: 'diamonds' }, { rank: 4, suit: 'diamonds' }, { rank: 5, suit: 'diamonds' }, { rank: 6, suit: 'diamonds' }, { rank: 7, suit: 'diamonds' }, { rank: 8, suit: 'diamonds' }, { rank: 9, suit: 'diamonds' }, { rank: 10, suit: 'diamonds' }, { rank: 'jack', suit: 'diamonds' }, { rank: 'queen', suit: 'diamonds' }, { rank: 'king', suit: 'diamonds' }, { rank: 'ace', suit: 'diamonds' },
//   { rank: 2, suit: 'hearts' }, { rank: 3, suit: 'hearts' }, { rank: 4, suit: 'hearts' }, { rank: 5, suit: 'hearts' }, { rank: 6, suit: 'hearts' }, { rank: 7, suit: 'hearts' }, { rank: 8, suit: 'hearts' }, { rank: 9, suit: 'hearts' }, { rank: 10, suit: 'hearts' }, { rank: 'jack', suit: 'hearts' }, { rank: 'queen', suit: 'hearts' }, { rank: 'king', suit: 'hearts' }, { rank: 'ace', suit: 'hearts' },
//   { rank: 2, suit: 'spades' }, { rank: 3, suit: 'spades' }, { rank: 4, suit: 'spades' }, { rank: 5, suit: 'spades' }, { rank: 6, suit: 'spades' }, { rank: 7, suit: 'spades' }, { rank: 8, suit: 'spades' }, { rank: 9, suit: 'spades' }, { rank: 10, suit: 'spades' }, { rank: 'jack', suit: 'spades' }, { rank: 'queen', suit: 'spades' }, { rank: 'king', suit: 'spades' }, { rank: 'ace', suit: 'spades' }];
var deck = [];
function generateDeck() {

  var suits = ['clubs', 'diamonds', 'hearts', 'spades'];
  var ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace'];
  for (var i = 0; i < ranks.length; i++) {
    for (var j = 0; i < suits.length; j++) {
      var cards = {
        rank: ranks[i],
        suit: suits[j]
      };
      deck.push(cards);
    }
  }
  console.log(deck);
}

generateDeck();

var shuffledDeck = _.shuffle(deck);

players[0].hand1 = shuffledDeck[0];
players[0].hand2 = shuffledDeck[1];
players[1].hand1 = shuffledDeck[2];
players[1].hand2 = shuffledDeck[3];
players[2].hand1 = shuffledDeck[4];
players[2].hand2 = shuffledDeck[5];
players[3].hand1 = shuffledDeck[6];
players[3].hand2 = shuffledDeck[7];

function calculateScore() {
  for (var i = 0; i < deck.length; i++) {
    if (deck[i].rank === 'jack') {
      deck[i].rank = 10;
    } else if (deck[i].rank === 'queen') {
      deck[i].rank = 10;
    } else if (deck[i].rank === 'king') {
      deck[i].rank = 10;
    } else if (deck[i].rank === 'ace') {
      deck[i].rank = 11;
    }
  }
  players[0].score = players[0].hand1.rank + players[0].hand2.rank;
  players[1].score = players[1].hand1.rank + players[1].hand2.rank;
  players[2].score = players[2].hand1.rank + players[2].hand2.rank;
  players[3].score = players[3].hand1.rank + players[3].hand2.rank;
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
