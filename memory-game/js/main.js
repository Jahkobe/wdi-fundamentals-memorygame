

alert('Hello, friends.');

const cards = [ 
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImages: "images/king-of-diamonds.png"
}
];

const cardsInPlay =[];

function checkForMatch(){

	if (cardsInPlay[0] === cardsInPlay[1]) {
  		console.log("You found a match!");
	} else {
 		console.log("Sorry, try again.");
	}

};

function flipCard(cardId){

	

	console.log("User flipped " + cards[cardId].rank);

		console.log(cards.cardImage);
		console.log(cards.suit);

		cardsInPlay.push(cards[cardId].rank);

		if(cardsInPlay.length === 2){
			checkForMatch();

		if(cardsInPlay[0]===cardsInPlay[1]){
			alert("You found a match!");
			}
		else{
			alert("Sorry, try again");
			}}
};



flipCard(0);
flipCard(2);