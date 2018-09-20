// Blackjack Card Game

/* 
Goal of the game - beat the dealer by getting a count as close to 21

User stores:
1) User must be able to press start button
2) User must be able to select to stand button or hit button
3) User must be able to bet 1, 5, 10, or 20 amount of money - all buttons
4) User must be able to stay or hit (or split - BONUS)
5) User must be able to reset the game

// Player goes first

// Turn 1 - player
// Each player gets 2 cards face up
// Dealer gets 1 card face up and 1 card face down
// Player gets 1 card face up and 1 card face down
// Player gets to bet 1, 5, 10, or 20 chips
// Player card show
// If not 21 or under 21, draw cards until 17 or under. (check if this is the right one - maybe add probability?)
    // If over 21, check if ace is considered 1 or 11
// Players get to choose to stand or hit
// If stand - push total and change turn
// If hit add another random card to the array
// check if the current total is 21
    // If 21, BUST! dealer wins
    // If not, prompt user to stay or hit
    // If stay - push total to array and change turn
// Dealer turn
// If total >= 18 stay
// If total <= 18, hit - check if 21
// if no bust - compare values
// If dealer > player - dealer wins
    // If dealer < player - player wins
    // If dealer > player - dealer wins
// Game ends



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


/*----- constants -----*/
const deckTotal = 52;

/*----- app's state (variables) -----*/

var player;
var playerCash;
var dealer;
var dealerCash;
var turn;
var score;
var round;

var state = {
    ace: [1, 11],
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    jack: 10,
    queen: 10,
    king: 10,
}


/*----- cached element references -----*/
dealer = [null, null];
player = [null, null];

/*----- event listeners -----*/

/*----- functions -----*/

/*----- bonus -----*/
// Splitting Pairs - if a player has two of the same denomination - he may choose to treat them as seperate hands when his turn comes around.
    // The player bets the equal amount and  - continue this
// Add money
    // Be able to check or to hit
// Add multiple players
// Change deck styles

//https://www.bicyclecards.com/how-to-play/blackjack/
