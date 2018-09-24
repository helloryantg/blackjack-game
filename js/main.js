/*----- constants -----*/


// const DECK = [
//     {card: 'dA', value: [1, 11]},
//     {card: 'hA', value: [1, 11]},
//     {card: 'sA', value: [1, 11]}, 
//     {card: 'cA', value: [1, 11]}, 
//     {card: 'dK', value: 10}, 
//     {card: 'hK', value: 10},
//     {card: 'sK', value: 10},
//     {card: 'cK', value: 10},
//     {card: 'dQ', value: 10},
//     {card: 'hQ', value: 10},
//     {card: 'sQ', value: 10},
//     {card: 'cQ', value: 10},
//     {card: 'dJ', value: 10},
//     {card: 'hJ', value: 10},
//     {card: 'sJ', value: 10,},
//     {card: 'cJ', value: 10,},
//     {card: 'd10', value: 10},
//     {card: 'h10', value: 10},
//     {card: 's10', value: 10},
//     {card: 'c10', value: 10},
//     {card: 'd09', value: 9},
//     {card: 'h09', value: 9},
//     {card: 's09', value: 9},
//     {card: 'c09', value: 9},
//     {card: 'd08', value: 8},
//     {card: 'h08', value: 8},
//     {card: 's08', value: 8},
//     {card: 'c08', value: 8},
//     {card: 'd07', value: 7},
//     {card: 'h07', value: 7},
//     {card: 's07', value: 7},
//     {card: 'c07', value: 7},
//     {card: 'd06', value: 6},
//     {card: 'h06', value: 6},
//     {card: 's06', value: 6},
//     {card: 'c06', value: 6},
//     {card: 'd05', value: 5},
//     {card: 'h05', value: 5},
//     {card: 's05', value: 5},
//     {card: 'c05', value: 5},
//     {card: 'd04', value: 4},
//     {card: 'h04', value: 4},
//     {card: 's04', value: 4},
//     {card: 'c04', value: 4},
//     {card: 'd03', value: 3},
//     {card: 'h03', value: 3},
//     {card: 's03', value: 3},
//     {card: 'c03', value: 3},
//     {card: 'd02', value: 2},
//     {card: 'h02', value: 2},
//     {card: 's02', value: 2},
//     {card: 'c02', value: 2},
// ];

const STARTING_BALANCE = 1000;

const CHIPS = {
    red: 10,
    green: 25,
    yellow: 50
}
/*----- app's state (variables) -----*/

var ranks;
var suits;
var values;
var deck;
var state;
var playerBet;
var balance;
var shuffledDeck;
var dealerCurrentTotal;
var playerCurrentTotal;

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
modalStart.addEventListener('click', function(event) {
    modalContainer.style.display = "none";
    state = 'betting';
});

restart.addEventListener('click', function() {
    initGame();
});

quitBtn.addEventListener('click', function() {
    location.reload();
});

chipContainer.addEventListener('click', placeBets);

/*----- functions -----*/
function setCards() {
    var firstCard = shuffledDeck.pop();
    dealerCard1.classList.remove('back-red');
    dealerCard1.classList.add(`${firstCard.card}`);
    dealerCurrentTotal = firstCard.value;
    dealerTotal.textContent = dealerCurrentTotal;
    
    var secondCard = shuffledDeck.pop();
    playerCard1.classList.remove('back-red');
    playerCard1.classList.add(`${secondCard.card}`);
    playerCurrentTotal = secondCard.value;
    playerTotal.textContent = playerCurrentTotal;

    var thirdCard = shuffledDeck.pop();
    dealerCard2.classList.remove('back-red');
    dealerCard2.classList.add(`${thirdCard.card}`);
    dealerCurrentTotal = thirdCard.value;
    dealerTotal.textContent = dealerCurrentTotal;

    
    // pop array object from array and make it appear as first dealer card
    // pop from array and make it appear as first player card
    // pop from array and set it as 2nd dealer card
    // pop from arra and make it appear as second player card
}


function checkChipValue(playerBet) {
    if (playerBet === 'red') {
        balance -= CHIPS.red;
    } else if (playerBet === 'green') {
        balance -= CHIPS.green;
    } else {
        balance -=CHIPS.yellow;
    }
}

function placeBets(e) {
    if (state !== 'betting') return;
    if (e.target !== chipContainer) {
        playerBet = e.target.id;
        checkChipValue(playerBet);
    }
    render();
    state = 'dealCards';
    render();
}

function render() {
    switch (state) {
        case 'gameStart':
            console.log('Game Starting');
            currentBalance.textContent = balance;
            dealerTotal.textContent = 0;
            playerTotal.textContent = 0;
            announcementTxt.textContent = 'Game Start... Place your bets!';
            moneyLost.textContent = 'Good luck!';
            // state = 'betting';
            break;
        case 'betting':
            currentBalance.textContent = balance;
            announcementTxt.textContent = 'You bet';
            moneyLost.textContent = `$${CHIPS[playerBet]}`;
            break;
        case 'dealCards':
            console.log('now dealing');
            setCards();
            
            break;
    }
}

function shuffleCards(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
        var rand = Math.floor(Math.random() * (i + 1));
        var newArr = arr[i];
        arr[i] = arr[rand];
        arr[rand] = newArr;
    }
    return arr;
}

function buildDeck() {
    var results = [];
    for (let suit in suits) {
        for (let rank in ranks) {
            results.push(`${suits[suit]}${ranks[rank]}`);
        }
    }
    return results;
}

function initGame() {
    ranks = ['02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K', 'A'];
    suits = ['d', 'h', 's', 'c'];
    values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11];
    deck = buildDeck();
    state = 'gameStart';
    playerTurn = 'dealer';
    balance = STARTING_BALANCE;
    shuffledDeck = shuffleCards(deck);
    render();
}

initGame();