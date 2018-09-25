/*----- constants -----*/
const STARTING_BALANCE = 1000;

/*----- app's state (variables) -----*/

var betting; // betting
var dealing; // dealing stage
var hitting; // hitting stage

var winner; // for when blackjack
var balance; // that gets updated a lot

var deck;
var currentBet; // what value chip was chosen

var blackjack; // if someone gets a blackjack

var dealerArray; // dealer cards
var playerArray; // player cards

var dealerSum; // dealer array totals
var playerSum; // player array totals

var aces; // true if there is an Ace present
var bust; // true if player goes over 21

/*----- cached element references -----*/
// Modal container
var modalContainer = document.getElementById('modal-container');

var dealerTotal = document.getElementById('dealerTotal');
var playerTotal = document.getElementById('playerTotal');

// Action buttons
var dealBtn = document.getElementById('deal-btn');
var hitBtn = document.getElementById('hit-btn');
var standBtn = document.getElementById('stand-btn');

// Cards containers
var dealerCards = document.getElementById('dealerCards');
var playerCards = document.getElementById('playerCards');

var chipsContainer = document.querySelector('.chip-container')
/*----- event listeners -----*/
// Modal controller
document.getElementById('start-btn').addEventListener('click', function(event) {
    modalContainer.style.display = 'none';
    console.log('User has pressed start game');
})
// Balance Text
var currentBalance = document.getElementById('currentBalance');

// Chips container
chipsContainer.addEventListener('click', placeBet);

// Deal button
// Only on when in deal stage
dealBtn.addEventListener('click', dealCards);

// Hit button
hitBtn.addEventListener('click', hitMe);

/*----- functions -----*/

function hitMe() {
    // code for when user wants to hit
}

function checkWinner() {
    // code for when there is a winner
    // return true if winner
}

function drawCard() {
    // code to draw card
    var drewCard = deck.pop();
    return drewCard;
}

function dealCards() {
    console.log('cards are dealt');
    // code to deal cards 
    for (var i = 0; i < 2; i++) {
        var card = drawCard();
        playerArray.push(card.display);
        playerSum += card.value;
        renderGame();
    }
    console.log(playerArray);
    console.log(playerSum);

    for (var i = 0; i < 2; i++) {
        var card = drawCard();
        dealerArray.push(card);
        dealerSum += card.value;
        renderGame();
    }
    console.log(dealerArray);
    

    dealing = false;
    // Dealing stage now over
    // Choice to hit or stand
    /////////////////////////////////////////////////////////////
    hitting = true;
    standing = true;
    renderGame();
    // update player and dealer arrays
    // check for winner
}

function shuffleDeck() {
    console.log('shuffled deck');
    for (var i = 0; i < deck.length; i++) {
        let swapIndex = Math.floor(Math.random() * deck.length);
        let randomCard = deck[swapIndex];
        let currentCard = deck[i];
        deck[swapIndex] = currentCard;
        deck[i] = randomCard;
    }
    return deck;
}

function placeBet(event) {
    console.log(`User has bet ${event.target.textContent}`);
    while (betting) {
        currentBet = event.target.textContent;
        if (currentBet > balance) {
            // Code for when there is not enough money in the balance
        }
        balance -= currentBet;
        betting = false;
        dealing = true;
        renderGame();
    }
}

function buildDeck() {
    var suits = ['d', 'h', 's', 'c'];
    var names = ['02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K', 'A'];
    var values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11];
    var deck = [];

    suits.forEach(function(suit) {
        names.forEach(function(name, idx) {
            var card = {
                display: suit + name,
                value: values[idx]
            };
            deck.push(card);
        });
    });
    return deck;
}

function renderGame() {
    // This gets called a lot 
    currentBalance.textContent = balance;

    dealerTotal.textContent = dealerSum;
    playerTotal.textContent = playerSum;

    // create divs with classname specific to the amount of cards dealt
    dealerCards.


    if (betting) {
        console.log('User has entered the betting stage');
        // change texts to bets
        // enable betting btn
        // user clicks chip to bet
    }
    if (dealing) {
        console.log('User has entered the dealing stage');
        shuffleDeck(); // confirmed
        console.log(deck);
        // update to allow deal btn
        // deal cards
        // Display cards and values - render
        // check for winner - if no winner change state to hitting stage - render 
    }
    if (hitting) {

    }
    if (winner) {
        console.log('we have a winner');
    }

}

function initGame() {
    // For when the game loads
    // clear all texts and values
    betting = true;
    dealing = false;
    
    // Set all values to empty/zero.
    dealerArray = [];
    playerArray = [];
    dealerSum = 0;
    playerSum = 0;
    balance = STARTING_BALANCE;
    
    // disable buttons here

    deck = buildDeck();
    renderGame();   
}

initGame();

// Notes
// For buttons, I can add a className called .hide to hide buttons

// Main focus is to get the card gameplay going

// Game Board Initializes
    // Empty arrays
    // balance = starting balance
    // Build deck
    // Render
        // balance text
        // chips
        // deal button

// When user clicks on chips 
    // If chipamount < balance continue;
        // add value to currentBet
            // * Grab html
        // subtract balance -= currentBet
        // change state to 


// Win logic
// if (playerSum > 21 && aces) {
    // this is for when the player draws and goes over 21 and has an Ace to contain any 11's
    // get index of card, reset value to 1 instead of 11
    // reupdate the current values, sums and the DOM
// }

// this is inside stand
// while (playerSum > dealerSum && playerSum <= 21) {

// }