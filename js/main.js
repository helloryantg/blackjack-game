/*----- constants -----*/
const STARTING_BALANCE = 1000;

/*----- app's state (variables) -----*/
var gameStarted; // init
var gameOver; // 
var playerWon; //

var dealerCards; // Array of cards
var playerCards;

// var state;
var playerBet;
var balance;
var dealerCurrentTotal;
var playerCurrentTotal;
var balanceText;

var myDeck;
var shuffledDeck;

/*----- cached element references -----*/

// Elements for modal container
var modalStart = document.getElementById('start-btn');
var modalContainer = document.getElementById('modal-container');

// Elements for texts and announcements
var announcementTxt = document.getElementById('announcementText');
var currentBalance = document.getElementById('currentBalance');
var moneyLost = document.getElementById('moneyLost');

// Elements for buttons
var restart = document.getElementById('restartBtn');
var quitBtn = document.getElementById('quitBtn');

// Elements for card totals
var dealerTotal = document.getElementById('dealerTotal');
var playerTotal = document.getElementById('playerTotal');

// Elements for chips
var chipContainer = document.querySelector('.chip-container');

// Elements for dealer cards
var dealerCard1 = document.querySelector('.dealer .first-card');
var dealerCard2 = document.querySelector('.dealer .second-card');

var playerCard1 = document.querySelector('.player .first-card');
var playerCard2 = document.querySelector('.player .second-card');

/*----- event listeners -----*/

// Modal View
modalStart.addEventListener('click', function(event) {
    modalContainer.style.display = "none";
});

// Restart Button
restart.addEventListener('click', function() {
    initGame();
});

// Quit Button
quitBtn.addEventListener('click', function() {
    location.reload();
});

// Chips
// chipContainer.addEventListener('click', placeBets);

/*----- functions -----*/
function drawCard(deck) {
    var card = deck.shift();
    return card;
}

function shuffleDeck(deck) {
    for (var i = 0; i < deck.length; i++) {
        let swapIndex = Math.floor(Math.random() * deck.length);
        let randomCard = deck[swapIndex];
        let currentCard = deck[i];
        deck[swapIndex] = currentCard;
        deck[i] = randomCard;
    }
    return deck;
}

function buildDeck() {
    var suits = ['d', 'h', 's', 'c'];
    var names = ['02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K', 'A'];
    var deck = [];

    suits.forEach(function(suit) {
        names.forEach(function(name) {
            var card = suit + name;
            deck.push(card);
        });
    });
    return deck;
}

function checkState() {
    if (gameStarted) {
        console.log('game has started');
        myDeck = buildDeck(); // Build the deck
        shuffledDeck = shuffleDeck(myDeck); // Shuffle the deck
        // Add cards to dealer and player arrays
        dealerCards = [drawCard(shuffledDeck), drawCard(shuffledDeck)];
        console.log(dealerCards);
    }
}

function renderBoard() {
    currentBalance.textContent = balanceText;
    checkState();
    // add?
}

function initBalance() {
    balance = STARTING_BALANCE;
    balanceText = balance;
}

function resetTotals() {
    dealerCurrentTotal = 0;
    playerCurrentTotal = 0;
}

function emptyCardArrays() {
    dealerCards = [];
    playerCards = [];
    myDeck = [];
}

function initGame() {
    gameStarted = false;
    gameover = false;
    playerWon = false;
    
    emptyCardArrays();
    resetTotals();
    initBalance();
    gameStarted = true;
    renderBoard();
}

initGame();







// getRank() {
//     if (rank === 'J') {
//         value = 10;
//     } else if (rank === 'Q') {
//         value = 10;
//     } else if (rank === 'K') {
//         value = 10;
//     } else if (rank === 'A') {
//         value = 11;
//     }
// }

// function checkChipValue(playerBet) {
//     if (playerBet === 'red') {
//         balance -= 10;
//     } else if (playerBet === 'green') {
//         balance -= 25;
//     } else {
//         balance -= 50;
//     }
// }

// function placeBets(e) {
//     if (state !== 'betting') return;
//     if (e.target !== chipContainer) {
//         playerBet = e.target.id;
//         checkChipValue(playerBet);
//     }
//     render();
//     state = 'dealCards';
//     render();
// }


// function getNextCard(deck) {
//     return deck.shift();
// }

// function shuffleCards(arr) {
//     for (var i = arr.length - 1; i > 0; i--) {
//         var rand = Math.floor(Math.random() * (i + 1));
//         var newArr = arr[i];
//         arr[i] = arr[rand];
//         arr[rand] = newArr;
//     }
//     return arr;
// }



