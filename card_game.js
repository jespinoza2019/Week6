//Card Game War between two players
/*Instructions - For the final project you will be creating an 
automated version of the classic card game WAR! 
There are many versions of the game WAR. 
In this version there are only 2 players.
-You do not need to do anything special when there is a 
tie in a round.
Think about how you would build this project and write 
your plan down. 
Consider classes such as: Card, Deck, Player, as well as what 
properties and methods they may include. 
    You do not need to accept any user input, 
    when you run your code, the entire game should play out 
    instantly without any user input inside of your browser’s 
    console.(no prompts needed)
The completed project should, when executed, do the following:
Deal 26 Cards to each Player from a Deck of 52 cards.
Iterate through the turns where each Player plays a Card.
The Player who played the higher card is awarded a point
Ties result in zero points for both Players
After all cards have been played, display the score and 
declare the winner.
Write a Unit Test using Mocha and Chai for at least one of 
the functions you write.*/


//War Game
    

/*The game calls for a deck of cards with 52 cards. The deck will be cards from an array.
although the deck will have fours suits, cards will have a face (what the card looks like) 
and a value associated with the face. Starting with 52 cards with values from  2 to 14. 
Ace is 14, king is 13, queen = 12, jack = 11 then face value for the rest. The suit won't matter 
in this game but the value of each card will. There will be no Jokers in this game*/ 
/*There will be cards within a deck of cards. The cards will have a face or what is on card 
such as a number or jack, queen . . . ect. There will be four suits and each face will have 
a value*/
//Creating the class for each card because each card will be different 
//in the deck although in this game value is what is important for the game
class Card {
    //Card setup  - is being created. Again game face and suite won't 
    //matter but put in code in case I will be creating another card game
    constructor(face, suit, value) {
        this.face = face;
        this.suit = suit;
        this.value = value;
    }

}
/*Create a class for the deck of cards. The deck will have 52 cards so will populate the array. 
It will have to be shuffled and then deal each player a stack */

class Deck {
    constructor() {
        this.cards = [];
    }
//function to create a deck of cards 
    createDeck() {
        let suits = ['Clubs', 'Hearts', 'Diamonds', 'Spades'];
        let face = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
        let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

//nested for loop that loops thorugh ranks then suits and creates new array including values
        for (let i = 0; i < suits.length; i++) {
            for (let j = 0; j< face.length; j++) {
                this.cards.push(new Card(suits[i], face[j], values [j]));
            }
        }
    }


//Method to shuffle the deck 
shuffleDeck() {
    //creating variables to do the iterations to 
    let location1, location2, tmp;
        for (let i = 0; i < 52; i++) {
            /*The Math.random() function returns a floating-point, pseudo-random number 
            that's greater than or equal to 0 and less than 1, with approximately uniform 
            distribution over that range  - which you can then scale to your desired range. 
            The implementation selects the initial seed to the random number generation algorithm; 
            it cannot be chosen or reset by the user.*/
        location1 = Math.floor((Math.random() * this.cards.length));
        location2 = Math.floor((Math.random() * this.cards.length));
            tmp = this.cards[location1];
            this.cards[location1] = this.cards[location2];
            this.cards[location2] = tmp;
    }
}
}
    /*creating player class with two players. Each player will have a name,
    stack of cards and a score after each play*/
    
//Player class that will pass through the array (deal) the shuffled deck of cards
class Player {
    constructor(name) {
        this.playerName = name;
        this.playerCards = [];
    }
}
    //War class has an array of player, thats start the game by naming the players
    //pushe creating a deck of cards and shuffling that deck of cards
class War {
    constructor() {
        this.players = [];
    }
    start(playerOneName, playerTwoName) {
        this.players.push(new Player(playerOneName));
        this.players.push(new Player(playerTwoName));
        let d = new Deck;
        // d.createDeck();//calls create deck funtion to d (new Deck0 variable)
        d.createDeck();
        // d.shuffleDeck()//calls shuffle funcion to d (new Deck) variable
        d.shuffleDeck();
        this.players[0].playerCards = d.cards.slice(0, 26);
        this.players[1].playerCards = d.cards.slice(26, 52);
        
    }
 }
 //creating a new instance of the war class
let warGame = new War();
warGame.start('Player1', 'Player2');

console.log(warGame.players[0].playerCards);
console.log(warGame.players[1].playerCards);




let r1 = warGame.players[0].playerCards;
let r2 = warGame.players[1].playerCards;
function retrieveValues (pcards){
    var values =[] 
    for (c = 0 ; c < pcards.length; c++){
         values.push(pcards[c].value);
    }
    //These values are coming back and need to go to const x or const y 
    return values;
}
//calling the function for var r1 and storing the result in x
const x = retrieveValues(r1);
console.log(x);
//calling the function for var r1 and storing the result in y
const y = retrieveValues(r2);
console.log(y);
// //creating a function to compare the two arrays
function compare (firstArr,secondArr){
    let pscore1 = 0;
    let pscore2 = 0;
    //this helped me see if I was looping through the array
    //var i = 0; 
    //console.log(secondArr);
    for (let p = 0; p < secondArr.length; p++){
       // i++;
        if (firstArr[p] > secondArr[p]){
            pscore1 = pscore1 + 1;
        }
        if(secondArr[p] > firstArr[p]){
            pscore2 = pscore2 + 1;
        }
        console.log(`Score1 ${pscore1} and Score2 ${pscore2}`);
    }
    if (pscore1 > pscore2){
        console.log("Player 1 is the winner");
    }
    if (pscore1 < pscore2){
        console.log("Player 2 is the winner");
    }
    if (pscore1 == pscore2){
        console.log("Tie GAME!");
    }

    // console.log(pscore1);
    // console.log(pscore2);
    // console.log(i);
}
//Calling the function
compare(x,y);
