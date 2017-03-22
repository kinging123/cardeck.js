# cardeck.js
A small (3kb) library for manipulating a deck of cards, to help developers creating card games

[![npm version](https://badge.fury.io/js/cardeck.js.svg)](https://badge.fury.io/js/cardeck.js)

# How to install it?
*Using [npm](https://www.npmjs.com/package/cardeck.js):*

`npm install cardeck.js`


*Using files:*

Download the [source file](https://raw.githubusercontent.com/kinging123/cardeck.js/master/cardeck.js) or the [minified source file](https://raw.githubusercontent.com/kinging123/cardeck.js/master/cardeck.min.js) to your project's folder, and include it inside your HTML file:

```html
<script type="text/javascript" src="path_to_cardeck/cardeck.min.js"></script>
```

# How to use it?

### The `Card` Class
The library provides you with a nice class (constructor function, to be exact) called `Card`.

#### Basic usage:

```javascript
var myCoolCard = new Card(); // Creates a random card

myCoolCard.getName(); // e.g. "King"
```

**You can also create cards with specific properties:**
```javascript
var ace = new Card("A"); // Creates an Ace with a random suite
var seven = new Card(7); // Creates a seven with a random suite
var king = new Card(12); // Creates a king with a random suite

var diamond = new Card(false, Cardeck.DIAMOND); // Creates a random card of diamond.

var spadesQueen = new Card("Q", Cardeck.SPADE); // Creates a Spades Queen
```

> All suited are referenced inside the `Cardeck` object. You can use the constants `Cardeck.HEART`, `Cardeck.DIAMOND`, `Cardeck.CLUB`, `Cardeck.SPADE` to reference a specific suite.

#### All Getters:

```javascript
var card = new Card("K", Cardeck.HEART);

card.getName(); // e.g. "King"
card.getCode(); // e.g. "K"
card.getSuit(); // e.g. "Heart"
card.getSuitSymbol(); // e.g. "♥"
card.getID(); // e.g. "K♥"
card.getColor(); // e.g. "Red"

var card2 = new Card("Q",Cardeck.CLUB);
var card3 = new Card("K", Cardeck.HEART);
card.isIdentical(card2); // e.g. false
card.isIdentical(card3); // e.g. true
card3.isIdentical(card); // e.g. true
```

### The `Deck` Class
The `Deck` class is provided for manipulating a whole deck.

#### Basic Usage:

```javascript
var deck = new Deck();

deck.takeRandomCard().getID(); // e.g. "K♥"
```

#### All methods:

```javascript
deck = new Deck(); // Generates a new deck with all 52 cards.


deck.getCard(2); // If you know the card's position, you can get it.

deck.getRandomCard(); // Returns a random card from the deck.
deck.getRandomCard(1); // Returns a random Ace from the deck.
deck.getRandomCard(false, Cardeck.HEART); // Returns a random Heart from the deck.

deck.removeCard(new Card(1, Cardeck.DIAMOND)); // Removes the Diamond Ace from the deck, if exists.

deck.takeNextCard(); /* or */ deck.draw(); // Returns the next card from the deck, in order, and then removes it from the deck.

deck.takeRandomCard(); /* or */ deck.drawRandom(); // Returns a random from the deck, and then removes it from the deck.

deck.addCard( new Card("J", Cardeck.DIAMOND) ); // Adds a diamond Jack to the deck. Warning: be careful when adding cards to the deck as it might cause unwanted duplicates.

deck.reset(); // Resets the deck to it's original 52 cards.
```


### Playing with the defaults:
Here's a pro tip: you can customize every little thing in this library by changing stuff in the `Cardeck` object.

Example:

```javascript
Cardeck.suits.push({
  "name": "Asterisk",
  "color": "Orange",
  "symbol": "*"
});
Cardeck.ASTERISK = Cardeck.suits.length-1;


Cardeck.values.push({
  "name": "Joker",
  "code": "JK"
});
```
