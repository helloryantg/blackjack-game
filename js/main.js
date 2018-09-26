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
var result;
var bust;

// Not yet implemented
var aces; // true if there is an Ace present

/*----- cached element references -----*/
var modalContainer = document.getElementById('modal-container'); 
var dealerTotal = document.getElementById('dealerTotal');  
var playerTotal = document.getElementById('playerTotal');
var dealBtn = document.getElementById('deal-btn'); 
var hitBtn = document.getElementById('hit-btn');
var holdBtn = document.getElementById('hold-btn');
var dealerCards = document.getElementById('dealerCards'); 
var playerCards = document.getElementById('playerCards');
var chipsContainer = document.querySelector('.chip-container')
var announceTxt = document.getElementById('announcementText');
var moneyTxt = document.getElementById('moneyLost');

/*----- event listeners -----*/
document.getElementById('start-btn').addEventListener('click', function(event) { 
    modalContainer.style.display = 'none';
});
var currentBalance = document.getElementById('currentBalance'); 
chipsContainer.addEventListener('click', placeBet);
dealBtn.addEventListener('click', dealCards); 
hitBtn.addEventListener('click', hitMe);
holdBtn.addEventListener('click', hold);

/*----- functions -----*/
function generateDealerCard() {
        var newCard = document.createElement('div');
        newCard.className = 'card large back-red';
        dealerCards.appendChild(newCard);
}

function generatePlayerCard() {
    var newCard = document.createElement('div');
    newCard.className = 'card large back-red';
    playerCards.appendChild(newCard);
}

function hold() {
    // code to stand
}

function hitMe() {
    var card = drawCard();
    playerArray.push(card.display);
    playerSum += card.value;
    generatePlayerCard();
    checkWinner();
    checkBust();
    renderGame();
}

function checkTie() {
    if (playerSum === dealerSum) {
        // result
        result = true;
        renderGame();
    }
}

function checkBust() {
    if (playerSum > 21) {
        // result
        result = true;
        decision = false;
    }
    if (dealerSum > 21) {
        // result
        result = true;
        decision = false;
    }
    renderGame();
}

function checkWinner() {
    if (playerSum === 21 && dealerSum !== 21) {
        // result
        result === true;
    } 
    if (dealerSum === 21 && playerSum !== 21) {
        // result
        result === true;
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
            generatePlayerCard();
            renderGame();
        }
        for (var i = 0; i < 2; i++) {
            var card = drawCard();
            dealerArray.push(card);
            dealerSum += card.value;
            generateDealerCard();
            renderGame();
        }
        
        dealing = false;
        checkWinner();
        checkBust();
        decision = true;
        renderGame();
    }
}

function shuffleDeck() {
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
    
    if (betting) {
        moneyTxt.textContent = `You bet ${currentBet}`;
        announceTxt.textContent = "Dealing Cards!";;
        // add chips container
        hitBtn.style.display = "none";
        dealBtn.style.display = "none";
        holdBtn.style.display = "none";
    }
    if (dealing) {
        // remove chips container
        dealBtn.style.display = "block";
    }
    if (decision) {
        hitBtn.style.display = "block";
        dealBtn.style.display = "none";
        holdBtn.style.display = "block";
    }
    if (result) {
        console.log('we have a result');
        hitBtn.style.display = "block";
        holdBtn.style.display = "none";
        hitBtn.style.display = "none";
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
    result = false;
    // disable buttons here

    deck = buildDeck();
    shuffleDeck();
    renderGame();   
}

initGame();



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