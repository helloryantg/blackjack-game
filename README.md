# Blackjack Card Game

* Goal of the game - beat the dealer by getting a count as close to 21

## User stores:
1) User must be able to press start button.
2) User must be able to select to hold, hit, or double buttons.
3) User must be able to input dollar amount of money.
4) User must be able to reset the game (start game button turns into reset once game has rendered).
5) User must be able to quit game to go back to pop-up screen.

## Gameplay
* Player gets 2 cards face up
* Dealer gets 1 card face up and 1 card face down
* Player gets to input dollar value for bets 
* If Player cards equal 21 
    * Dealer flips cards
        * Dealer conditions
    * If Dealer also has 21
        * It's a tie 
    * If not, Player wins.
    * Shuffle cards
* While Player cards is less than 21
    * Player gets to choose to hold, hit, or double (if matching cards)
    * Check for cards equal 21
        * Keep in mind that Ace cards count as 1 or 11
* If Player cards is greater than 21 
    * Player busts, Dealer wins
    * Shuffle cards

### Conditions
* If total >= 18 stay
* If total <= 18 hit
* If total === 21 blackjack
* If no bust - compare values with player
* If dealer > player - dealer wins
* If dealer < player - player wins
* If dealer === player - it's a tie


#### Technologies
* HTML 
* CSS
* jQuery

#### Game
* Array of card objects for main deck
    * Card values = 1 - 10 (10 for all face cards)
    * Suits (unecessary?)
* Player and Dealer - seperate Arrays to compare to each other which is greater
* Nested for-loops for the suits? 
* Use CSS-framework for cards


##### Notes
* Make sure to add state - when cards are in play - don't allow betting/holding/staying
* Z-index for stacking

##### Variables


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
