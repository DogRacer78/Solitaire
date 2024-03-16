// populate all the card images

let cards = [];
let cardPiles = [[],[],[],[],[],[],[],[]];
let completedPiles = {};
let emptySpaces = {};
// spacing
const largeSpacing = 20;
const smallSpacing = 10;
const largeImgWidth = 100;
const largeImgHeight = 145;
const smallImgWidth = 70;
const smallImgHeight = 101;
let currentImgWidth = largeImgWidth;
let currentImgHeight = largeImgHeight
let xSpacing = largeSpacing;
let ySpacing = 20;
let cardPilesLevel = largeImgHeight + ySpacing;

const images = {};

function loadImages()
{
    for (let i = 2; i < 11; i++)
    {
        images[i + " of Spades"] = new Image();
        images[i + " of Spades"].src = "Images/" + i + "_of_spades.png";
        images[i + " of Clubs"] = new Image();
        images[i + " of Clubs"].src = "Images/" + i + "_of_clubs.png";
        images[i + " of Hearts"] = new Image();
        images[i + " of Hearts"].src = "Images/" + i + "_of_hearts.png";
        images[i + " of Diamonds"] = new Image();
        images[i + " of Diamonds"].src = "Images/" + i + "_of_diamonds.png";
    }

    images["Jack of Spades"] = new Image();
    images["Jack of Spades"].src = "Images/jack_of_spades2.png";
    images["Jack of Clubs"] = new Image();
    images["Jack of Clubs"].src = "Images/jack_of_clubs2.png";
    images["Jack of Hearts"] = new Image();
    images["Jack of Hearts"].src = "Images/jack_of_hearts2.png";
    images["Jack of Diamonds"] = new Image();
    images["Jack of Diamonds"].src = "Images/jack_of_diamonds2.png";

    images["Queen of Spades"] = new Image();
    images["Queen of Spades"].src = "Images/queen_of_spades2.png";
    images["Queen of Clubs"] = new Image();
    images["Queen of Clubs"].src = "Images/queen_of_clubs2.png";
    images["Queen of Hearts"] = new Image();
    images["Queen of Hearts"].src = "Images/queen_of_hearts2.png";
    images["Queen of Diamonds"] = new Image();

    images["King of Spades"] = new Image();
    images["King of Spades"].src = "Images/king_of_spades2.png";
    images["King of Clubs"] = new Image();
    images["King of Clubs"].src = "Images/king_of_clubs2.png";
    images["King of Hearts"] = new Image();
    images["King of Hearts"].src = "Images/king_of_hearts2.png";
    images["King of Diamonds"] = new Image();
    images["King of Diamonds"].src = "Images/king_of_diamonds2.png";

    images["Ace of Spades"] = new Image();
    images["Ace of Spades"].src = "Images/ace_of_spades.png";
    images["Ace of Clubs"] = new Image();
    images["Ace of Clubs"].src = "Images/ace_of_clubs.png";
    images["Ace of Hearts"] = new Image();
    images["Ace of Hearts"].src = "Images/ace_of_hearts.png";
    images["Ace of Diamonds"] = new Image();
    images["Ace of Diamonds"].src = "Images/ace_of_diamonds.png";

    images["back"] = new Image();
    images["back"].src = "Images/back.png";

    images["refresh"] = new Image();
    images["refresh"].src = "Images/refresh.png";
}

// load the images
loadImages();

let mediaQuery = window.matchMedia("screen and ((max-width: 830px) or (max-height: 440px))");

// using the images directory, iterate through and gather all the cards
window.onload = () => 
{
    let back = document.getElementById("card-back");
    back.src = images["back"].src;
    back.hidden = false;

    let board = document.getElementById("game");
    console.log(board);
    // all the numbered cards
    for (let i = 2; i < 11; i++)
    {
        cards.push(new Card(i + " of Spades", "Images/" + i + "_of_spades.png", i, "Spades", ondrop, ondragstart, clickCard));
        board.appendChild(cards[cards.length - 1].element);
        cards.push(new Card(i + " of Clubs", "Images/" + i + "_of_clubs.png", i, "Clubs", ondrop, ondragstart, clickCard));
        board.appendChild(cards[cards.length - 1].element);
        cards.push(new Card(i + " of Hearts", "Images/" + i + "_of_hearts.png", i, "Hearts", ondrop, ondragstart, clickCard));
        board.appendChild(cards[cards.length - 1].element);
        cards.push(new Card(i + " of Diamonds", "Images/" + i + "_of_diamonds.png", i, "Diamonds", ondrop, ondragstart, clickCard));
        board.appendChild(cards[cards.length - 1].element);
    }

    // face cards
    cards.push(new Card("Jack of Spades", "Images/jack_of_spades2.png", 11, "Spades", ondrop, ondragstart, clickCard));
    board.appendChild(cards[cards.length - 1].element);
    cards.push(new Card("Jack of Clubs", "Images/jack_of_clubs2.png", 11, "Clubs", ondrop, ondragstart, clickCard));
    board.appendChild(cards[cards.length - 1].element);
    cards.push(new Card("Jack of Hearts", "Images/jack_of_hearts2.png", 11, "Hearts", ondrop, ondragstart, clickCard));
    board.appendChild(cards[cards.length - 1].element);
    cards.push(new Card("Jack of Diamonds", "Images/jack_of_diamonds2.png", 11, "Diamonds", ondrop, ondragstart, clickCard));
    board.appendChild(cards[cards.length - 1].element);

    cards.push(new Card("Queen of Spades", "Images/queen_of_spades2.png", 12, "Spades", ondrop, ondragstart, clickCard));
    board.appendChild(cards[cards.length - 1].element);
    cards.push(new Card("Queen of Clubs", "Images/queen_of_clubs2.png", 12, "Clubs", ondrop, ondragstart, clickCard));
    board.appendChild(cards[cards.length - 1].element);
    cards.push(new Card("Queen of Hearts", "Images/queen_of_hearts2.png", 12, "Hearts", ondrop, ondragstart, clickCard));
    board.appendChild(cards[cards.length - 1].element);
    cards.push(new Card("Queen of Diamonds", "Images/queen_of_diamonds2.png", 12, "Diamonds", ondrop, ondragstart, clickCard));
    board.appendChild(cards[cards.length - 1].element);

    cards.push(new Card("King of Spades", "Images/king_of_spades2.png", 13, "Spades", ondrop, ondragstart, clickCard));
    board.appendChild(cards[cards.length - 1].element);
    cards.push(new Card("King of Clubs", "Images/king_of_clubs2.png", 13, "Clubs", ondrop, ondragstart, clickCard));
    board.appendChild(cards[cards.length - 1].element);
    cards.push(new Card("King of Hearts", "Images/king_of_hearts2.png", 13, "Hearts", ondrop, ondragstart, clickCard));
    board.appendChild(cards[cards.length - 1].element);
    cards.push(new Card("King of Diamonds", "Images/king_of_diamonds2.png", 13, "Diamonds", ondrop, ondragstart, clickCard));
    board.appendChild(cards[cards.length - 1].element);

    // aces
    cards.push(new Card("Ace of Spades", "Images/ace_of_spades.png", 1, "Spades", ondrop, ondragstart, clickCard));
    board.appendChild(cards[cards.length - 1].element);
    cards.push(new Card("Ace of Clubs", "Images/ace_of_clubs.png", 1, "Clubs", ondrop, ondragstart, clickCard));
    board.appendChild(cards[cards.length - 1].element);
    cards.push(new Card("Ace of Hearts", "Images/ace_of_hearts.png", 1, "Hearts", ondrop, ondragstart, clickCard));
    board.appendChild(cards[cards.length - 1].element);
    cards.push(new Card("Ace of Diamonds", "Images/ace_of_diamonds.png", 1, "Diamonds", ondrop, ondragstart, clickCard));
    board.appendChild(cards[cards.length - 1].element);

    shuffle(cards);

    //cardPilesLevel = document.getElementById("card-back").height + ySpacing;
    document.getElementById("card-back").addEventListener("dragstart", (e) => {
        e.preventDefault();
    });
    console.log(cardPilesLevel);
    
    // create the 7 pile of cards
    for (let i = 1; i < 8; i++)
    {
        for (let j = 0; j < i; j++)
        {
            let currentCard = cards[cards.length - 1];
            currentCard.setPos(cardPilesLevel + (j * ySpacing), (i - 1) + (currentImgWidth + xSpacing) * (i - 1));
            currentCard.setZIndex(j);
            if (j == i - 1)
            {
                currentCard.setFaceUp();
            }

            currentCard.show();
            cardPiles[i].push(currentCard);
            cards.pop();
        }
    }

    let divHeight = document.getElementById("card-back").height;
    let divWidth = document.getElementById("card-back").width;
    // set the completed piles based on the last four card piles
    completedPiles["completed-pile-1"] = {};
    completedPiles["completed-pile-1"].element = document.getElementById("completed-pile-1");
    completedPiles["completed-pile-1"].element.style.left = cardPiles[4][0].left + "px";
    completedPiles["completed-pile-1"].element.style.width = divWidth + "px";
    completedPiles["completed-pile-1"].element.style.height = divHeight + "px";
    completedPiles["completed-pile-1"].cards = [];
    completedPiles["completed-pile-1"].suit = "";
    completedPiles["completed-pile-1"].element.ondrop = dropCompletedPiles;

    completedPiles["completed-pile-2"] = {};
    completedPiles["completed-pile-2"].element = document.getElementById("completed-pile-2");
    completedPiles["completed-pile-2"].element.style.left = cardPiles[5][0].left + "px";
    completedPiles["completed-pile-2"].element.style.width = divWidth + "px";
    completedPiles["completed-pile-2"].element.style.height = divHeight + "px";
    completedPiles["completed-pile-2"].cards = [];
    completedPiles["completed-pile-2"].suit = "";
    completedPiles["completed-pile-2"].element.ondrop = dropCompletedPiles;

    completedPiles["completed-pile-3"] = {};
    completedPiles["completed-pile-3"].element = document.getElementById("completed-pile-3");
    completedPiles["completed-pile-3"].element.style.left = cardPiles[6][0].left + "px";
    completedPiles["completed-pile-3"].element.style.width = divWidth + "px";
    completedPiles["completed-pile-3"].element.style.height = divHeight + "px";
    completedPiles["completed-pile-3"].cards = [];
    completedPiles["completed-pile-3"].suit = "";
    completedPiles["completed-pile-3"].element.ondrop = dropCompletedPiles;

    completedPiles["completed-pile-4"] = {};
    completedPiles["completed-pile-4"].element = document.getElementById("completed-pile-4");
    completedPiles["completed-pile-4"].element.style.left = cardPiles[7][0].left + "px";
    completedPiles["completed-pile-4"].element.style.width = divWidth + "px";
    completedPiles["completed-pile-4"].element.style.height = divHeight + "px";
    completedPiles["completed-pile-4"].cards = [];
    completedPiles["completed-pile-4"].suit = "";
    completedPiles["completed-pile-4"].element.ondrop = dropCompletedPiles;

    // setup the empty spaces
    for (let i = 1; i < 8; i++)
    {
        let emptySpace = document.getElementById("empty-space-" + i);
        emptySpace.ondrop = onDropEmptySpace;
        emptySpace.style.left = cardPiles[i][0].left + "px";
        emptySpace.style.top = cardPiles[i][0].top + "px";
        emptySpace.style.width = divWidth + "px";
        emptySpace.style.height = divHeight + "px";
        emptySpaces["empty-space-" + i] = {};
        emptySpaces["empty-space-" + i].pileId = i;
        emptySpaces["empty-space-" + i].element = emptySpace;

        //console.log(emptySpaces["empty-space-" + i]);
    }

    onMediaResize(mediaQuery);

    mediaQuery.addEventListener("change", () => onMediaResize(mediaQuery));
}

/**
 * 
 * @param {DragEvent} event 
 */
function dropCompletedPiles(event)
{
    let source = event.dataTransfer.getData("text");
    let { sourceIndexValues, sourceCard } = decodeCardPileIndex(source);
    console.log("Source is " + sourceCard.name);

    const completedPile = completedPiles[event.target.id];

    if (sourceIndexValues[1] !== cardPiles[sourceIndexValues[0]].length - 1)
            return;

    // if the suit is empty check it is an ace
    if (completedPile.suit === "")
    {
        if (sourceCard.cardType.value !== 1)
            return;

        if (completedPile.cards.length !== 0)
            return;

        // if the ace is not from end of pile, do not allow it

        completedPile.suit = sourceCard.cardType.suit;
        completedPile.cards.push(sourceCard);
        sourceCard.setPos(0, parseInt(completedPile.element.style.left));
        sourceCard.setZIndex(completedPile.cards.length);
        cardPiles[sourceIndexValues[0]].pop();
        sourceCard.ondragstart = function(e) { e.preventDefault(); }
        completedPile.element.style.backgroundColor = "transparent";
        return;
    }

    // else if the card is not an ace, check if it can be placed on top of the last card
    if (sourceCard.cardType.compareToDone(completedPile.cards[completedPile.cards.length - 1].cardType))
    {
        completedPile.cards.push(sourceCard);
        sourceCard.setPos(0, parseInt(completedPile.element.style.left));
        sourceCard.setZIndex(completedPile.cards.length);
        cardPiles[sourceIndexValues[0]].pop();
        sourceCard.ondragstart = function(e) { e.preventDefault(); };
    }
}

function onDropEmptySpace(event)
{
    let source = event.dataTransfer.getData("text");
    let { sourceIndexValues, sourceCard } = decodeCardPileIndex(source);

    // not king
    if (sourceCard.cardType.value !== 13)
        return;

    // if from the deck pile then do not try and move everything
    if (sourceIndexValues[0] === 0)
    {
        sourceCard.setPos(parseInt(this.style.top), parseInt(this.style.left));
        sourceCard.setZIndex(0);
        cardPiles[0].pop();
        cardPiles[emptySpaces[this.id].pileId].push(sourceCard);
    }
    else
    {
        for (let j = sourceIndexValues[1]; j < cardPiles[sourceIndexValues[0]].length;)
        {
            let currentCard = cardPiles[sourceIndexValues[0]][j];
            currentCard.setPos(cardPiles[emptySpaces[this.id].pileId].length * ySpacing + cardPilesLevel, parseInt(this.style.left));
            currentCard.setZIndex(cardPiles[emptySpaces[this.id].pileId].length);
            cardPiles[emptySpaces[this.id].pileId].push(currentCard);
            cardPiles[sourceIndexValues[0]].splice(j, 1);
        }
    }
}

function decodeCardPileIndex(index)
{
    let sourceIndexValues = index.split(",");
    sourceIndexValues[0] = parseInt(sourceIndexValues[0]);
    sourceIndexValues[1] = parseInt(sourceIndexValues[1]);
    const sourceCard = cardPiles[sourceIndexValues[0]][sourceIndexValues[1]];

    return { sourceIndexValues, sourceCard };
}

function clickCard(event)
{
    // TODO:
    // flip the card if it is face down and and at the end of a pile
    for (let i = 1; i < cardPiles.length; i++)
    {
        if (cardPiles[i].length === 0)
            continue;

        if (cardPiles[i].indexOf(this) === cardPiles[i].length - 1 && !this.faceUp)
        {
            // flip the card
            this.setFaceUp();
            return;
        }
            
    }
}

document.getElementById("card-back").onclick = clickDeck;

function clickDeck(e)
{
    console.log("Card back clicked");
    // flip the card at the top of the deck and move it to the left
    cards[cards.length - 1].moveToCardPile(e.target.width + xSpacing, 0 - cards.length - 1);
    console.log(cards[cards.length - 1].name);
    cardPiles[0].push(cards[cards.length - 1]);
    cards.pop();

    if (cards.length == 0)
    {
        e.target.src = images["refresh"].src;
        e.target.onclick = reShuffleCards;
    }
}

function reShuffleCards(event)
{
    while (cardPiles[0].length > 0)
    {
        let card = cardPiles[0].pop();
        card.hide();
        cards.push(card);
    }
    shuffle(cards);
    event.target.src = images["back"].src;
    event.target.onclick = clickDeck;
}

/**
 * 
 * @param {DragEvent} event 
 * @returns 
 */
function ondrop(event)
{
    if (!this.faceUp)
        return;

    let source = event.dataTransfer.getData("text");
    let sourceIndex = source.split(",");
    let sourceIndexValues = source.split(",");
    sourceIndexValues[0] = parseInt(sourceIndexValues[0]);
    sourceIndexValues[1] = parseInt(sourceIndexValues[1]);
    let sourceCard = cardPiles[sourceIndexValues[0]][sourceIndexValues[1]];
    console.log("Source is " + sourceCard.name);

    // compare the items
    if (!sourceCard.cardType.compare(this.cardType))
        return;

    let targetPile = null;

    // find the location of the card that the moving card was dropped onto
    for (let i = 1; i < cardPiles.length; i++)
    {
        if (cardPiles[i].indexOf(this) === -1)
            continue;

        targetPile = cardPiles[i];
        break;
    }

    if (targetPile === null)
        return;

    // if from the deck pile then do not try and move everything
    if (sourceIndexValues[0] == 0)
    {
        targetPile.push(sourceCard);
        sourceCard.setPos((targetPile.length - 1) * ySpacing + cardPilesLevel, this.left);
        sourceCard.setZIndex(targetPile.length - 1);
        cardPiles[0].pop();
    }
    else
    {
        for (let j = sourceIndex[1]; j < cardPiles[sourceIndexValues[0]].length;)
        {
            let currentCard = cardPiles[sourceIndexValues[0]][j];
            currentCard.setPos((targetPile.length) * ySpacing + cardPilesLevel, this.left);
            currentCard.setZIndex(targetPile.length);
            targetPile.push(currentCard);
            cardPiles[sourceIndexValues[0]].splice(j, 1);
        }    
    }


    // TODO: move all the face up cards from the piles
}

/**
 * 
 * @param {DragEvent} event 
 */
function ondragstart(event)
{
    if (!this.faceUp)
    {
        event.stopPropagation();
        event.preventDefault();
        return;
    }

    // get the position of the card in the arrays
    let pos = "";
    for (let i = 0; i < cardPiles.length; i++) 
    {
        let pileIndex = cardPiles[i].indexOf(this);
        if (pileIndex == -1)
            continue;

        pos = i + "," + pileIndex;
        break;
    }

    event.dataTransfer.setData("text", pos);
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

function resizeElements()
{
    let divHeight = currentImgHeight;
    let divWidth = currentImgWidth;

    // reposition the empty spaces
    for (let i = 1; i < 8; i++)
    {
        let emptySpace = emptySpaces["empty-space-" + i].element;
        emptySpace.style.left = (i - 1) + (currentImgWidth + xSpacing) * (i - 1) + "px";
        emptySpace.style.top = cardPilesLevel + "px";
        emptySpace.style.width = divWidth + "px";
        emptySpace.style.height = divHeight + "px";
    }

    // reposition the completed piles
    for (let i = 1; i < 5; i++)
    {
        let completedPile = completedPiles["completed-pile-" + i].element;
        // idk why but the + 3 is needed to make it look right
        let left = (i + 2) * (currentImgWidth + xSpacing) + 3;
        completedPile.style.left = left + "px";
        completedPile.style.width = divWidth + "px";
        completedPile.style.height = divHeight + "px";

        let pile = completedPiles["completed-pile-" + i].cards;
        // the cards in the completed pile
        for (let j = 0; j < pile.length; j++)
        {
            let currentCard = pile[j];
            currentCard.setPos(0, left);
        }

    }

    for (let i = 1; i < cardPiles.length; i++)
    {
        for (let j = 0; j < cardPiles[i].length; j++)
        {
            let currentCard = cardPiles[i][j];
            currentCard.setPos(cardPilesLevel + (j * ySpacing), (i - 1) + (currentImgWidth + xSpacing) * (i - 1));
        }
    }

    // the deck pile
    for (let i = 0; i < cardPiles[0].length; i++)
    {
        let currentCard = cardPiles[0][i];
        currentCard.setPos(currentCard.top, currentImgWidth + xSpacing);
    }

}

function onMediaResize(x)
{
    if (x.matches)
    {
        xSpacing = smallSpacing;
        currentImgWidth = smallImgWidth;
        currentImgHeight = smallImgHeight;
        cardPilesLevel = smallImgHeight + ySpacing;
    }
    else
    {
        xSpacing = largeSpacing;
        currentImgWidth = largeImgWidth;
        currentImgHeight = largeImgHeight;
        cardPilesLevel = largeImgHeight + ySpacing;
    }
    resizeElements();
}