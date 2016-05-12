# cardeck.js
A small (3kb) library for manipulating a deck of cards, to help developers creating card games

# How to use it?

### The `Card` Class
The library provides you with a nice class (constructor function, to be exact) called `Card`.

####Basic usage:

```
var myCoolCard = new Card // Creates a random card

myCoolCard.getName(); // e.g. "King"
```

**You can also create cards with specific properties:**
```
var ace = new Card("A"); // Creates an Ace with a random suite
var seven = new Card(7); // Creates a seven with a random suite
var king = new Card(12); // Creates a king with a random suite

var diamond = new Card(false, 1); // Creates a random card of diamond.

var spadesQueen = new Card("Q", 3); // Creates a Spades Queen
```

> Suite reference:

> 0. Heart
> 1. Diamond
> 2. Club
> 3. Spade

####All Getters:

```
var card = new Card("K", 0);

card.getName(); // e.g. "King"
card.getCode(); // e.g. "K"
card.getSuit(); // e.g. "Heart"
card.getSuitSymbol(); // e.g. "♥"
card.getID(); // e.g. "K♥"
card.getColor(); // e.g. "Red"

var card2 = new Card("Q", 2);
var card3 = new Card("K", 0);
card.isIdentical(card2); // e.g. false
card.isIdentical(card3); // e.g. true
card3.isIdentical(card); // e.g. true
```

### The `Deck` Class
The `Deck` class is provided for manipulating a whole deck.

####Basic Usage:

```
var deck = new Deck();

deck.takeRandomCard().getID(); // e.g. "K♥"
```

####All methods:

```
deck = new Deck(); // Generates a new deck with all 52 cards.


deck.getCard(2); // If you know the card's position, you can get it.

deck.getRandomCard(); // Returns a random card from the deck.
deck.getRandomCard(1); // Returns a random Ace from the deck.
deck.getRandomCard(false, 0); // Returns a random Heart from the deck.

deck.removeCard(new Card(1,1)); // Removes the Diamond Ace from the deck, if exists.

deck.takeNextCard(); /* or */ deck.draw(); // Returns the next card from the deck, in order, and then removes it from the deck.

deck.takeRandomCard(); /* or */ deck.drawRandom(); // Returns a random from the deck, and then removes it from the deck.

deck.addCard( new Card("J",2) ); // Adds a diamond Jack to the deck. Warning: be careful when adding cards to the deck as it might cause unwanted duplicates.

deck.reset(); // Resets the deck to it's original 52 cards.
```


### Playing with the defaults:
Here's a pro tip: you can customize every little thing in this library by changing stuff in the `Cardeck` object.

Example:

```
Cardeck.suits.push({
  "name": "Asterisk",
  "color": "Orange",
  "symbol": "*"
});

Cardeck.values.push({
  "name": "Joker",
  "code": "JK"
});
```
