/*----- constants -----*/
const STARTING_BALANCE = 1000;

const OUTCOMES = {
    'p': 'player wins',
    'd': 'dealer wins',
    't': 'tie',
    'pbj': 'player blackjack',
    'dbj': 'dealer blackjack',
    'pb': 'player busts',
    'db': 'dealer busts'
};

/*----- app's state (variables) -----*/
var betting; // betting
var dealing; // dealing stage
var hitting; // hitting stage
var decision;
var balance; // balance left
var deck;
var currentBet; // chip value chosen
var dealerArray; // arrays
var playerArray;  
var dealerSum; // sums
var playerSum;  
var winner; // for when blackjack
var bust;

// Not yet implemented
var aces; // true if there is an Ace present

/*----- cached element references -----*/
var modalContainer = document.getElementById('modal-container');    // modal
var dealerTotal = document.getElementById('dealerTotal');   // text Totals
var playerTotal = document.getElementById('playerTotal');
var dealBtn = document.getElementById('deal-btn');  // action buttons
var hitBtn = document.getElementById('hit-btn');
var holdBtn = document.getElementById('hold-btn');
var dealerCards = document.getElementById('dealerCards'); // card containers
var playerCards = document.getElementById('playerCards');
// var newCard = document.createElement('div'); // new card element
// var newCard1 = document.createElement('div');
// newCard1.className = 'card large back-red';
// newCard.className = 'card large back-red';
var chipsContainer = document.querySelector('.chip-container')
var announceTxt = document.getElementById('announcementText');
var moneyTxt = document.getElementById('moneyLost');

/*----- event listeners -----*/
document.getElementById('start-btn').addEventListener('click', function(event) { // modal
    modalContainer.style.display = 'none';
    console.log('User has pressed start game');
})
var currentBalance = document.getElementById('currentBalance'); // balance text
chipsContainer.addEventListener('click', placeBet); // chips container
dealBtn.addEventListener('click', dealCards); // deal button
hitBtn.addEventListener('click', hitMe); // hit button
holdBtn.addEventListener('click', hold);

/*----- functions -----*/
function generateCard(player) {
    for (var i = 0; i < player; i++) {
        var newCard = document.createElement('div');
        newCard.className = 'card large back-red';
        playerCards.appendChild(newCard);
        // not working
    }
}

function hold() {
    // code to stand
}

function hitMe() {
    var card = drawCard();
    playerArray.push(card);
    playerSum += card;
}

function checkBust() {
    if (playerSum > 21) {
        bust = true;
        console.log(OUTCOMES.pb);
    }
    if (dealerSum > 21) {
        bust = true;
        console.log(OUTCOMES.db);
    }
    decision = false;
}

function checkWinner() {
    if (playerSum === 21 && dealerSum !== 21) {
        winner === true;
        console.log(OUTCOMES.p);
    } 
    if (dealerSum === 21 && playerSum !== 21) {
        winner === true;
        console.log(OUTCOMES.d);
    }
    decision = false;
    renderGame();
}

function drawCard() {
    // code to draw card
    var drewCard = deck.pop();
    return drewCard;
}

function dealCards() {
    if (dealing) {
        for (var i = 0; i < 2; i++) {
            var card = drawCard();
            playerArray.push(card.display);
            playerSum += card.value;
            generateCard(playerArray);
            console.log('it got here');
            // playerCards.appendChild(newCard);
            console.log(playerArray);
            renderGame();
        }
        for (var i = 0; i < 2; i++) {
            var card = drawCard();
            dealerArray.push(card);
            dealerSum += card.value;
            // dealerCards.appendChild(newCard1);    
            console.log(dealerArray);
            renderGame();
        }
        dealing = false;
        checkWinner();
        checkBust();
        decision = true;
        renderGame();
    }
    if (decision) {
        // Choice to hit or stand
    }
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
    // if (event.target !== chipsContainer) return; // Why is this not working?
    while (betting) {
        currentBet = event.target.textContent;
        if (currentBet > balance) {
            event.target.style.display = "none";
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
    currentBalance.textContent = balance;
    dealerTotal.textContent = dealerSum;
    playerTotal.textContent = playerSum;

    generateCard(playerArray);
    generateCard(dealerArray);
    
    if (betting) {
        console.log('User has entered the betting stage');
        moneyTxt.textContent = `You bet ${currentBet}`;
        announceTxt.textContent = "Dealing Cards!";;
        // add chips container
        hitBtn.style.display = "none";
        dealBtn.style.display = "none";
        holdBtn.style.display = "none";
    }
    if (dealing) {
        console.log('User has entered the dealing stage');
        // remove chips container
        dealBtn.style.display = "block";
    }
    if (decision) {
        console.log('user has entered the decision stage');
        hitBtn.style.display = "block";
        dealBtn.style.display = "none";
        holdBtn.style.display = "block";
    }
    if (winner) {
        console.log('we have a winner');
    }

}

function initGame() {
    betting = true;
    dealing = false;
    // Set all values to empty/zero.
    dealerArray = [];
    playerArray = [];
    dealerSum = 0;
    playerSum = 0;
    balance = STARTING_BALANCE;
    currentBet = 0;
    bust = null;
    // disable buttons here

    deck = buildDeck();
    shuffleDeck();
    renderGame();   
}

initGame();

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

// render a lot and change state per user interaction
// deal - check arrays.lenght if 0 - allow deal button && if bet > 0
// make bet variable
// before render check blackjack
// make variable = blackjack - set to p or d;
// when you press deal = init bj to null

// if balance is less than the value of chip // disable chip

// function computeHand(hand) {
//     var sum = 0;
//     var aces = 0;
//     hand for each (card) 
//     sum += card.value;
//     if (card.value) aces++;

//     while (sum > 21 && aces) {
//         sum -= 10
//         aces -= 1
//     }
//     return sum;
// }

// Outcomes
// if player wins
// if dealer wins
// if tie
// if player bj
// if dealer bj