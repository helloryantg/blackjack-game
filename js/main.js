/*----- constants -----*/
const STARTING_BALANCE = 1000;

const OUTCOMES = {
    'p': 'Player Wins!',
    'd': 'Dealer Wins, Try again!',
    't': "It's a Tie!",
    'pbj': 'Blackjack! Player Wins!',
    'dbj': 'Dealer gets Blackjack!',
    'pb': 'Player Busts, You Lose!',
    'db': 'Dealer Busts, You Win!'
};

/*----- app's state (variables) -----*/
var balance; 
var deck;
var currentBet; 
var dealerHand;
var playerHand;  
var dealerSum;
var playerSum;  
var result;

/*----- cached element references -----*/
var modalContainer = document.getElementById('modal-container'); 
var dealerTotal = document.getElementById('dealerTotal');  
var playerTotal = document.getElementById('playerTotal');
var actionBtnCntr = document.querySelector('.action-btn-container');
var dealBtn = document.getElementById('deal-btn'); 
var hitBtn = document.getElementById('hit-btn');
var standBtn = document.getElementById('stand-btn');
var dealerCards = document.getElementById('dealerCards'); 
var playerCards = document.getElementById('playerCards');
var chipsContainer = document.querySelector('.chip-container');
var betContainer = document.getElementById('bet-container');
var announceTxt = document.getElementById('announcementText');
var moneyTxt = document.getElementById('moneyLost');

/*----- event listeners -----*/
document.getElementById('quitBtn').addEventListener('click', reloadPage);
document.getElementById('restartBtn').addEventListener('click', initGame);
document.getElementById('start-btn').addEventListener('click', function(event) { 
    modalContainer.style.display = 'none';
});
var currentBalance = document.getElementById('currentBalance'); 
chipsContainer.addEventListener('click', placeBet);
dealBtn.addEventListener('click', dealCards); 
hitBtn.addEventListener('click', hitMe);
standBtn.addEventListener('click', stand);

/*----- functions -----*/
function reloadPage() {
    location.reload();
}

function computerLogic() {
    while (dealerSum <= 17) {
        drawCard(dealerHand)
        dealerSum = computeHand(dealerHand);
        renderGame();
    }
    if (dealerSum > 18) return;
}

function computePayout() {
    if (result === 'p' || result === 'pbj' || result === 'db') balance += currentBet;
    if (result === 'd' || result === 'dbj' || result === 'pb') {
        currentBet = 0;
    } else {
        balance += currentBet;
    }
    currentBet = 0;
}

function checkWin() {
    if (computeHand(playerHand) > computeHand(dealerHand)) result = 'p';
    if (computeHand(playerHand) < computeHand(dealerHand)) result = 'd';
    if (computeHand(playerHand) === computeHand(dealerHand)) result = 't';
    if (computeHand(playerHand) === 21) result = 'pbj';
    if (computeHand(dealerHand) === 21) result = 'dbj';
    if (computeHand(playerHand) > 21) result = 'pb';
    if (computeHand(dealerHand) > 21) result = 'db';
}

function stand() {
    showDealerCard();
    dealerSum = computeHand(dealerHand);
    renderGame();
    computerLogic();
    checkWin();
    computePayout();
    renderGame();
}

function computeHand(hand) {
    var sum = 0;
    var aces = 0;
    hand.forEach(function(card) {
        sum += card.value;
        if (card.display.includes('A')) aces++;
    });
    if (sum !== 21) {
        while (sum > 21 && aces) {
            sum -= 10;
            aces -= 1;   
        }
    }   
    return sum;
}

function hitMe() {
    drawCard(playerHand);
    playerSum = computeHand(playerHand);
    if (computeHand(playerHand) > 21) result = 'pb';
    renderGame();
}

function drawCard(hand) {
    hand.push(deck.pop());
}

function dealCards() {
    drawCard(dealerHand);
    dealerSum = computeHand(dealerHand);
    drawCard(dealerHand);
    drawCard(playerHand);
    drawCard(playerHand);
    playerSum = computeHand(playerHand);
    renderGame()
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
    return ((playerHand.length !== 0) && !result);
}

function showPlayerCard() {
    html = '';
    playerHand.forEach(function(card) {
        html += `<div class="card large ${card.display}"></div>`;
    });
    playerCards.innerHTML = html;
}

function showDealerCard() {
    var html = '';
    dealerHand.forEach(function(card, idx) {
        html += `<div class="card large ${inProgress() && idx === 1 ? 'back-red' : card.display}"></div>`;
    });
    dealerCards.innerHTML = html;
}

function renderGame() {
    showDealerCard();
    showPlayerCard();
    currentBalance.textContent = balance;
    moneyTxt.textContent = `$ ${currentBet}`;
    dealerTotal.textContent = dealerSum;
    playerTotal.textContent = playerSum;
    betContainer.style.visibility = inProgress() ? "hidden" : "visible"; 
    actionBtnCntr.style.visibility = inProgress() ? "visible" : "hidden";
    announceTxt.textContent = result ? OUTCOMES[result] : 'Good Luck!';
    dealBtn.style.visibility = currentBet ? "visible" : "hidden";
    dealBtn.disabled = !currentBet;
    if (result) resetHand();
}

function resetHand() {
    dealerHand = [];
    playerHand = [];
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

// Bugs and Fixes
    // Deal button works even after going over 21    
    // Add Double
    // deal button is not going away
    // AI Logic
    // fix bet-container 
        // add a reset button that zeroes curretBalance
    // deal button not working