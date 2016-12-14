/**
 * Welcome to Cardeck.js
 * This library is meant for building simple card games with JavaScript,
 * Without having to deal with getting the cards themselves.
 * More documentation can be found on GitHub:
 * http://github.com/kinging/cardeck.js
 * Reuven
 */

// Define defaults. Play with it, it's fun!
const Cardeck = {
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
		{empty: true},
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

class Card {
	constructor(value, suit) {
		if(typeof value === 'undefined') return new Deck().getRandomCard(false, suit);

		if(typeof value === 'number') this.value = value;
		else {
			this.value = Cardeck.values.findIndex(i=>i.code==value);
		}

		if(typeof suit === 'undefined') this.suit = Math.floor(Math.random()*Cardeck.suits.length);
		else this.suit = suit;
	}

	getName() {
		return Cardeck.values[this.value].name;
	}

	getCode() {
		return Cardeck.values[this.value].code;
	}

	getSuit() {
		return Cardeck.suits[this.suit].name;
	}

	getSuitSymbol() {
		return Cardeck.suits[this.suit].symbol;
	}

	getColor() {
		return Cardeck.suits[this.suit].color;
	}

	getID() {
		return this.getCode()+this.getSuitSymbol();
	}

	isIdentical(card) {
		return this.value == card.value && this.suit == card.suit;
	}


}




class Deck {
	constructor() {
		this.cards = [];

		for (let value of Cardeck.values) {
			for(let suit of Cardeck.suits) {
				value.empty || this.cards.push(new Card(value.code, Cardeck[suit.name.toUpperCase()]))
			}
		}
	}

	getCard(id) {
		return this.cards[id];
	};

	getRandomCard(value, suit) {
		if(typeof value !== 'number' && typeof suit !== 'number')
		return this.getCard(Math.floor(Math.random()*this.cards.length));
		else {
			let tempDeck = [],
				finalDeck = [];
			if(typeof value === 'number') {
				for (let card of this.cards) {
					if(card.value==value)tempDeck.push(card);
				}
			} else tempDeck = this.cards;

			if(typeof suit === 'number') {
				for (let i = 0; i < tempDeck.length; i++) {
					if(tempDeck[i].suit==suit)finalDeck.push(tempDeck[i]);
				}
			} else finalDeck = tempDeck;

			if(finalDeck.length == 1)return finalDeck[0];
			else throw new Error("More than one card matched query.");
		}
	}

	removeCard(card) {
		if(card instanceof Card === false) return false;
		this.cards = this.cards.filter( deckCard => !deckCard.isIdentical(card) );
	}

	draw() {
		var card = this.cards[this.cards.length-1];
		this.removeCard(card);
		return card;
	}
	takeNextCard() {return this.draw();}

	drawRandom(value, suit) {
		var card = this.getRandomCard(value, suit);
		this.removeCard(card);
		return card;
	}
	takeRandomCard(value, suit) {return this.drawRandom(value, suit);}

	addCard(card) {
		if(card instanceof Card) this.cards.push(card);
		else return false;
	}

	reset() {
		this.cards = new Deck().cards;
	}
}
