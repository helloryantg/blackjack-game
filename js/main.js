

/*----- constants -----*/
const DECK = [
    {dA: [1, 11]}, {hA: [1, 11]}, {sA: [1, 11]}, {cA: [1, 11]},
    {dK: 10},{hK: 10}, {sK: 10}, {cK: 10},
    {dQ: 10}, {hQ: 10}, {sQ: 10}, {cQ: 10},
    {dJ: 10}, {hJ: 10}, {sJ: 10}, {cJ: 10},
    {d10: 10}, {h10: 10}, {s10: 10}, {c10: 10},
    {d09: 9}, {h09: 9}, {s09: 9}, {c09: 9}, 
    {d08: 8}, {h08: 8}, {s08: 8}, {c08: 8}, 
    {d07: 7}, {h07: 7}, {s07: 7}, {c07: 7},
    {d06: 6}, {h06: 6}, {s06: 6}, {c06: 6},
    {d05: 5}, {h05: 5}, {s05: 5}, {c05: 5},
    {d04: 4}, {h04: 4}, {s04: 4}, {c04: 4},
    {d03: 3}, {h03: 3}, {s03: 3}, {c03: 3},
    {d02: 2}, {h02: 2}, {s02: 2}, {c02: 2}
];

const STARTING_BALANCE = 1000;

const CHIPS = {
    red: 10,
    green: 25,
    yellow: 50
}

// class Deck {
//     constructor() {
//         this.deck = [];
//         const suits = ['d', 'h', 's', 'c'];
//         const values = ['a', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k']

//         for (let suit in suits) {
//             for (let value in values) {
//                 this.deck.push(`${values[value]}${suits[suit]}`);
//             }
//         }
        
//     }
// }
// // This gives me an array of 52 cards in strings
// var deck1 = new Deck();




/*----- app's state (variables) -----*/
var modalStart;
var modalContainer;
var announcementTxt;
var currentBalance;
var restart;
var quitBtn;
var dealerTotal;
var playerTotal;
var state;
var chipContainer;
var moneyLost;

var gameStart;

/*----- cached element references -----*/
modalStart = document.getElementById('start-btn');
modalContainer = document.getElementById('modal-container');
announcementTxt = document.getElementById('announcementText');
currentBalance = document.getElementById('currentBalance');
restart = document.getElementById('restartBtn');
quitBtn = document.getElementById('quitBtn');
dealerTotal = document.getElementById('dealerTotal');
playerTotal = document.getElementById('playerTotal');
chipContainer = document.querySelector('.chip-container');
moneyLost = document.getElementById('moneyLost');

/*----- event listeners -----*/
modalStart.addEventListener('click', function(event) {
    modalContainer.style.display = "none";
    flipCards();
});

restart.addEventListener('click', function() {
    initGame();
});

quitBtn.addEventListener('click', function() {
    location.reload();
});

chipContainer.addEventListener('click', function() {

})
// Make sure to change modalContainer.style.display to normal when a user quits game.

/*----- functions -----*/
function flipCards() {
    if (state = 'dealer') {

    } else {

    }
}

// switch (state) {
//     case gameStart:

// }

function initGame() {
    state = gameStart;
    playerTurn = 'dealer';
    announcementTxt.textContent = 'Game Start... Place your bets!';
    currentBalance.textContent = STARTING_BALANCE;
    dealerTotal.textContent = 0;
    playerTotal.textContent = 0;
    moneyLost.textContent = 'Good luck!';
}

initGame();