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
var balance; // balance left
var deck;
var currentBet; // chip value chosen
var dealerArray; // arrays
var playerArray;  
var dealerSum; // sums
var playerSum;  
var result;

// Not yet implemented
var aces; // true if there is an Ace present

/*----- cached element references -----*/
var modalContainer = document.getElementById('modal-container'); 
var dealerTotal = document.getElementById('dealerTotal');  
var playerTotal = document.getElementById('playerTotal');
var actionBtnCntr = document.querySelector('.action-btn-container');
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



// fix deal button





/*----- functions -----*/
function hold() {
    // code to stand
}

function computeHand() {
    // do compute hand function here
}

function generateDealerCard(cardFace) {
        var newCard = document.createElement('div');
        newCard.className = 'card large back-red';
        newCard.className = cardFace;
        console.log(cardFace);
        dealerCards.appendChild(newCard);
}

function generatePlayerCard(cardFace) {
    var newCard = document.createElement('div');
    newCard.className = 'card large back-red';
    newCard.className = cardFace;
    playerCards.appendChild(newCard);
}

function hitMe() {
    drawCard(playerArray);
    if (computeHand(playerArray) > 21) result = 'd';
    renderGame();
}

function checkTie() {
    if (playerSum === dealerSum) {
        // result
        result = true;
        renderGame();
    }
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
    result = false;
    decision = false;

    renderGame();
}

function drawCard(hand) {
    hand.push(deck.pop());
}

function dealCards() {
    drawCard(dealerArray);
    drawCard(dealerArray);
    drawCard(playerArray);
    drawCard(playerArray);
    // check for blackjack and set result if there is to 'pbj' or 'dbj'
    if (computeHand(dealerArray)) result = 'dbj';
    if (computeHand(dealerArray)) result = 'dbj';
    renderGame();
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
    var betAmt = parseInt(event.target.textContent);
    if (betAmt > balance) return;
    balance -= betAmt;
    currentBet += betAmt;
    renderGame();
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

function inProgress() {
    return (playerArray.length && !result);
}

function renderGame() {
    var html = '';
    dealerArray.forEach(function(card, idx) {
        html += `<div class="card large ${inProgress() && idx === 0 ? 'back-red' : card.display}"></div>`;
    });
    dealerCards.innerHTML = html;
    html = '';
    playerArray.forEach(function(card) {
        html += `<div class="card large ${card.display}"></div>`;
    });
    playerCards.innerHTML = html;

    currentBalance.textContent = balance;
    moneyTxt.textContent = currentBet;
    dealerTotal.textContent = dealerSum;
    playerTotal.textContent = playerSum;
    chipsContainer.style.visibility = inProgress() ? "hidden" : "visible";
    actionBtnCntr.style.visibility = inProgress() ? "visible" : "hidden";
    dealBtn.disabled = inProgress() && currentBet;
    announceTxt.textContent = result ? OUTCOMES[result] : 'Good Luck!';
    if (result) resetHand();
}

function resetHand() {
    dealerArray = [];
    playerArray = [];
    dealerSum = 0;
    playerSum = 0;
    currentBet = 0;
    result = null;
}

function initGame() {
    resetHand();
    balance = STARTING_BALANCE;
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