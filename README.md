# Blackjack Card Game

* Goal of the game - beat the dealer by getting a count as 21 or as close to 21

## User stores:
* User sees popup page with start button - must be able to press start button.
* User sees gameboard.
    * Initial page must have 4 cards on the table facedown  X
    * Dealer and Player containers are not selected X
    * Announcement container defaults to "Game Starting... Dealing Cards"   X
    * Hit / Hold / Double buttons de-selected   
    * Balance is set to $1000   X
    * Chips are de-selected 
* User must be able to select and press hold, hit, or double buttons
* User must be able to select amount of chip to bet
* User must be able to reset the game without quitting. X
* User must be able to quit game to go back to pop-up screen.   X

## Gameplay
* Board starts out with no cards
* Round begins
* Player gets to choose amount using chips - state = bets
    * Once pressed, subtract from balance
* If deck > 4 - deal cards
* Player gets 2 cards face up - check for 21
* Dealer gets 1 card face up and 1 card face down
    * If ace card is showing - side wager (BONUS)
* While player cards is less than 21 - if 21, return;
    * player gets to choose to hold / hit / double
* Dealer flips cards - check for 21
    * Dealer conditions
    * Compare card values
    * If Dealer also has 21
        * It's a tie 
    * If not, Player wins.
* If deck !== 4 - Shuffle cards

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
