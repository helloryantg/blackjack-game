

/*----- constants -----*/
// const deck = [
//     {dA: [1, 11]}, {hA: [1, 11]}, {sA: [1, 11]}, {cA: [1, 11]},
//     {dK: 10},{hK: 10}, {sK: 10}, {cK: 10},
//     {dQ: 10}, {hQ: 10}, {sQ: 10}, {cQ: 10},
//     {dJ: 10}, {hJ: 10}, {sJ: 10}, {cJ: 10},
//     {d10: 10}, {h10: 10}, {s10: 10}, {c10: 10},
//     {d09: 9}, {h09: 9}, {s09: 9}, {c09: 9}, 
//     {d08: 8}, {h08: 8}, {s08: 8}, {c08: 8}, 
//     {d07: 7}, {h07: 7}, {s07: 7}, {c07: 7},
//     {d06: 6}, {h06: 6}, {s06: 6}, {c06: 6},
//     {d05: 5}, {h05: 5}, {s05: 5}, {c05: 5},
//     {d04: 4}, {h04: 4}, {s04: 4}, {c04: 4},
//     {d03: 3}, {h03: 3}, {s03: 3}, {c03: 3},
//     {d02: 2}, {h02: 2}, {s02: 2}, {c02: 2}
// ];

class Deck {
    constructor() {
        this.deck = [];
        const suits = ['diamonds', 'hearts', 'spades', 'clubs'];
        const values = ['ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king']

        for (let suit in suits) {
            for (let value in values) {
                this.deck.push(`${values[value]} of ${suits[suit]}`);
            }
        }
    }
}

var deck1 = new Deck();

var player = {
    credit: 1000,
    cardsValue: 0,
    hit: function() {
        // 
    },
    stay: function() {

    },
    double: function() {

    },
    winCredit: function(amount) {
        this.credit += amount;
    },
    loseCredit: function(amount) {
        this.credit -= amount;
    }
}

var dealer = {
    cardsValue: 0,
    hit: function() {

    },
    stay: function() {

    }
}

/*----- app's state (variables) -----*/
var state; // State of the game

var dealerHand; // Array for dealer
var playerHand; // Array for player
var dealer;
var player;


/*----- cached element references -----*/

dealer = [null, null];
player = [null, null];

/*----- event listeners -----*/
    
document.querySelector('#restartBtn').addEventListener('click', restartGame);




/*----- functions -----*/
function initGame();
function render();

function restartGame() {
    console.log('restarting');
}



functions:
function initGame() {
    // Shuffle Cards
    // Render board
    // Deal cards
    // Check if 21
        // If (player === 21) && (dealer !== 21)
            // player wins
            // player get round chips
            // start next round
        // else if (player !== 21) && (dealer === 21) 
            // dealer wins
            // dealer gets round chips
            // start next round
        // else if (player === 21) && ((dealer === 21)
            // it's a tie
            // player and dealer get chips back
}

function render() {
    // Render Score
    // Render Gameboard
    // If there is a winner
        // Render Winning Message
    // else 
        // Render Turn Message
    // Deal 1 card per player face up
    // Deal 1 card facedown
    // Alternate distribution
}

function gameOver() {
    // 
}
*/


/*----- bonus -----*/
// Splitting Pairs - if a player has two of the same denomination - he may choose to treat them as seperate hands when his turn comes around.
    // The player bets the equal amount and  - continue this
// Add money
    // Be able to check or to hit
// Add multiple players
// Change deck styles

//https://www.bicyclecards.com/how-to-play/blackjack/

// Add audio