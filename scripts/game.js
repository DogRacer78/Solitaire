// populate all the card images

let cards = [];
let cardPiles = [[],[],[],[],[],[],[]];

// spacing
const xSpacing = 20;
const ySpacing = 40;
let cardPilesLevel = 0;

// using the images directory, iterate through and gather all the cards
window.onload = () => 
{
    let board = document.getElementById("game");
    console.log(board);
    // all the numbered cards
    for (let i = 2; i < 11; i++)
    {
        cards.push(new Card(i + " of Spades", "Images/" + i + "_of_spades.png", 0, 0, clickCard));
        board.appendChild(cards[cards.length - 1].element);
        cards.push(new Card(i + " of Clubs", "Images/" + i + "_of_clubs.png", 0, 0, clickCard));
        board.appendChild(cards[cards.length - 1].element);
        cards.push(new Card(i + " of Hearts", "Images/" + i + "_of_hearts.png", 0, 0, clickCard));
        board.appendChild(cards[cards.length - 1].element);
        cards.push(new Card(i + " of Diamonds", "Images/" + i + "_of_diamonds.png", 0, 0, clickCard));
        board.appendChild(cards[cards.length - 1].element);
    }

    // face cards
    cards.push(new Card("Jack of Spades", "Images/jack_of_spades2.png", 0, 0, clickCard));
    board.appendChild(cards[cards.length - 1].element);
    cards.push(new Card("Jack of Clubs", "Images/jack_of_clubs2.png", 0, 0, clickCard));
    board.appendChild(cards[cards.length - 1].element);
    cards.push(new Card("Jack of Hearts", "Images/jack_of_hearts2.png", 0, 0, clickCard));
    board.appendChild(cards[cards.length - 1].element);
    cards.push(new Card("Jack of Diamonds", "Images/jack_of_diamonds2.png", 0, 0, clickCard));
    board.appendChild(cards[cards.length - 1].element);

    cards.push(new Card("Queen of Spades", "Images/queen_of_spades2.png", 0, 0, clickCard));
    board.appendChild(cards[cards.length - 1].element);
    cards.push(new Card("Queen of Clubs", "Images/queen_of_clubs2.png", 0, 0, clickCard));
    board.appendChild(cards[cards.length - 1].element);
    cards.push(new Card("Queen of Hearts", "Images/queen_of_hearts2.png", 0, 0, clickCard));
    board.appendChild(cards[cards.length - 1].element);
    cards.push(new Card("Queen of Diamonds", "Images/queen_of_diamonds2.png", 0, 0, clickCard));
    board.appendChild(cards[cards.length - 1].element);

    cards.push(new Card("King of Spades", "Images/king_of_spades2.png", 0, 0, clickCard));
    board.appendChild(cards[cards.length - 1].element);
    cards.push(new Card("King of Clubs", "Images/king_of_clubs2.png", 0, 0, clickCard));
    board.appendChild(cards[cards.length - 1].element);
    cards.push(new Card("King of Hearts", "Images/king_of_hearts2.png", 0, 0, clickCard));
    board.appendChild(cards[cards.length - 1].element);
    cards.push(new Card("King of Diamonds", "Images/king_of_diamonds2.png", 0, 0, clickCard));
    board.appendChild(cards[cards.length - 1].element);

    // aces
    cards.push(new Card("Ace of Spades", "Images/ace_of_spades.png", 0, 0, clickCard));
    board.appendChild(cards[cards.length - 1].element);
    cards.push(new Card("Ace of Clubs", "Images/ace_of_clubs.png", 0, 0, clickCard));
    board.appendChild(cards[cards.length - 1].element);
    cards.push(new Card("Ace of Hearts", "Images/ace_of_hearts.png", 0, 0, clickCard));
    board.appendChild(cards[cards.length - 1].element);
    cards.push(new Card("Ace of Diamonds", "Images/ace_of_diamonds.png", 0, 0, clickCard));
    board.appendChild(cards[cards.length - 1].element);

    shuffle(cards);

    cardPilesLevel = document.getElementById("card-back").height + ySpacing;
    console.log(cardPilesLevel);
    
    // create the 7 pile of cards
    for (let i = 1; i < 8; i++)
    {
        for (let j = 0; j < i; j++)
        {
            let currentCard = cards[cards.length - 1];
            currentCard.setPos(cardPilesLevel + (j * ySpacing), (i - 1) + (100 + xSpacing) * (i - 1));
            currentCard.setZIndex(j);
            if (j == i - 1)
            {
                currentCard.setFaceUp();
            }

            currentCard.show();
            cardPiles[i - 1].push(currentCard);
            cards.pop();
        }
    }
}

function clickCard(event)
{
    // remove from cards and add to the current face up pile
}

document.getElementById("card-back").onclick = (e) => 
{
    console.log("Card back clicked");
    // flip the card at the top of the deck and move it to the left
    cards[cards.length - 1].moveToCardPile(e.target.width + xSpacing, 0 - cards.length - 1);
    console.log(cards[cards.length - 1].name);
    cards.pop();

    if (cards.length == 0)
    {
        e.target.hidden = true;
    }
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
}
