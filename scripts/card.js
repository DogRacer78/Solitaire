
class Card {
    static backCardImage = "back";

    /**
     * 
     * @param {string} name Name of the card
     * @param {number} top Top coordinate of the card
     * @param {number} left Left coordinate of the card
     */
    constructor(name, imagePath, value, suit, ondrop, ondragstart, onclick) {
        this.name = name;
        this.top = 0;
        this.left = 0;
        this.imagePath = imagePath;

        this.cardType = new CardType(suit, value);

        this.element = document.createElement("img");
        this.element.src = images[this.name].src;
        this.element.className = "playing-cards";
        this.element.style.top = this.top + "px";
        this.element.style.left = this.left + "px";
        this.element.style.zIndex = 1;
        this.element.hidden = true;
        this.element.ondragstart = ondragstart.bind(this);
        this.element.ondrop = ondrop.bind(this);
        this.element.onclick = onclick.bind(this);
        this.element.ondragover = (event) => { event.preventDefault() };
        this.element.ondragenter = (event) => { event.preventDefault() };
        this.element.ondragleave = (event) => { event.preventDefault() };
        this.element.ondragend = (event) => { event.preventDefault() };

        this.faceUp = false;
        this.element.src = images[Card.backCardImage].src;
    }

    getHTMLString() {
        return `<img src="${this.imagePath}" class="playing-cards" style="top: ${this.top}px; left: ${this.left}px; z-index: 1;"/>`
    }

    moveToCardPile(pos, zIndex)
    {
        this.left = pos;
        this.element.style.left = pos + "px";
        this.element.style.zIndex = zIndex;
        this.setFaceUp();
        this.element.hidden = false;
    }

    /**
     * Sets the position of the card.
     * To keep a value the same, pass -1
     * @param {number} top The top coordinate of the card
     * @param {number} left The left coordinate of the card
     */
    setPos(top, left)
    {
        if (top !== -1)
        {
            this.top = top;
            this.element.style.top = top + "px";
        }

        if (left !== -1)
        {
            this.left = left;
            this.element.style.left = left + "px";
        }
    }

    setZIndex(zIndex)
    {
        this.element.style.zIndex = zIndex;
    }

    show()
    {
        this.element.hidden = false;
    }

    hide()
    {
        this.element.hidden = true;
    }

    setFaceDown()
    {
        this.faceUp = false;
        this.element.src = Card.backCardImage;    
    }

    setFaceUp()
    {
        this.faceUp = true;
        this.element.src = this.imagePath;
    }

    onClick()
    {
        this.element.hidden = true;
    }
}

