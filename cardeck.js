/**
 * Welcome to Cardeck.js
 * This library is meant for building simple card games with JavaScript,
 * Without having to deal with getting the cards themselves.
 * More documentation can be found on GitHub:
 * http://github.com/kinging/cardeck.js
 * Reuven
 */

// Define defaults. Play with it, it's fun!
var Cardeck = {
	suits: [
		{
			name: "Heart",
			color: "Red",
			symbol: "♥"
		},

		{
			name: "Diamond",
			color: "Red",
			symbol: "♦"
		},

		{
			name: "Club",
			color: "Black",
			symbol: "♣"
		},

		{
			name: "Spade",
			color: "Black",
			symbol: "♠"
		}
	],

	values: [
		{},
		{
			name: "Ace",
			code: "A"
		},

		{
			name: "Two",
			code: "2"
		},

		{
			name: "Three",
			code: "3"
		},

		{
			name: "Four",
			code: "4"
		},

		{
			name: "Five",
			code: "5"
		},

		{
			name: "Six",
			code: "6"
		},

		{
			name: "Seven",
			code: "7"
		},

		{
			name: "Eight",
			code: "8"
		},

		{
			name: "Nine",
			code: "9"
		},

		{
			name: "Ten",
			code: "10"
		},

		{
			name: "Jack",
			code: "J"
		},

		{
			name: "Queen",
			code: "Q"
		},

		{
			name: "King",
			code: "K"
		}
	],

	// Suits CONSTANTS:
	HEART: 0,
	DIAMOND: 1,
	CLUB: 2,
	SPADE: 3
};

function Card(value, suit) {
	if(typeof value === 'undefined') return new Deck().getRandomCard(false, suit);

	if(typeof value === 'number') this.value = value;
	else {
		for (var i = Cardeck.values.length - 1; i >= 1; i--) {
			if(Cardeck.values[i].code == value)this.value = i;
		}
	}

	if(typeof suit === 'undefined') this.suit = Math.floor(Math.random()*4);
	else this.suit = suit;


}


Card.prototype.getName = function() {
	return Cardeck.values[this.value].name;
}

Card.prototype.getCode = function() {
	return Cardeck.values[this.value].code;
}

Card.prototype.getSuit = function() {
	return Cardeck.suits[this.suit].name;
}

Card.prototype.getSuitSymbol = function() {
	return Cardeck.suits[this.suit].symbol;
}

Card.prototype.getColor = function() {
	return Cardeck.suits[this.suit].color;
}

Card.prototype.getID = function() {
	return this.getCode()+this.getSuitSymbol();
}

Card.prototype.isIdentical = function(card) {
	return this.value == card.value && this.suit == card.suit;
}





function Deck() {
	this.cards = [];

	for (var value = 1; value < Cardeck.values.length; value++) {
		for (var suit = 0; suit < Cardeck.suits.length; suit++) {
			this.cards.push(new Card(value, suit));
		}
	}

}

Deck.prototype.getCard = function(id) {
	return this.cards[id];
};

Deck.prototype.getRandomCard = function (value, suit) {
	if(typeof value !== 'number' && typeof suit !== 'number')
		return this.getCard(Math.floor(Math.random()*this.cards.length));
	else {
		var tempDeck = [];
		var finalDeck = [];
		if(typeof value === 'number') {
			for (var i = 0; i < this.cards.length; i++) {
				if(this.cards[i].value==value)tempDeck.push(this.cards[i]);
			}
		} else tempDeck = this.cards;

		if(typeof suit === 'number') {
			for (var i = 0; i < tempDeck.length; i++) {
				if(tempDeck[i].suit==suit)finalDeck.push(tempDeck[i]);
			}
		} else finalDeck = tempDeck;

		if(finalDeck.length == 1)return finalDeck[0];
		else throw new Error("More than one card matched query.");
	}
}

Deck.prototype.removeCard = function (card) {
	if(card instanceof Card === false) return false;
	this.cards = this.cards.filter(function(deckCard) {
		return !deckCard.isIdentical(card);
	});
}

Deck.prototype.takeNextCard = Deck.prototype.draw = function () {
	var card = this.cards[this.cards.length-1];
	this.removeCard(card);
	return card;
}

Deck.prototype.takeRandomCard = Deck.prototype.drawRandom = function (value, suit) {
	var card = this.getRandomCard(value, suit);
	this.removeCard(card);
	return card;
}

Deck.prototype.addCard = function(card) {
	if(card instanceof Card) this.cards.push(card);
	else return false;
}

Deck.prototype.reset = function () {
	this.cards = new Deck().cards;
}