
class Card {
    static backCardImage = "Images/back.png";

    /**
     * 
     * @param {string} name Name of the card
     * @param {number} top Top coordinate of the card
     * @param {number} left Left coordinate of the card
     */
    constructor(name, imagePath, top, left, clickEvent) {
        this.name = name;
        this.top = top;
        this.left = left;
        this.imagePath = imagePath;

        this.element = document.createElement("img");
        this.element.src = imagePath;
        this.element.className = "playing-cards";
        this.element.style.top = top + "px";
        this.element.style.left = left + "px";
        this.element.style.zIndex = 1;
        this.element.hidden = true;
        this.element.onclick = clickEvent.bind(this);

        this.faceUp = false;
        this.element.src = Card.backCardImage;
    }

    getHTMLString() {
        return `<img src="${this.imagePath}" class="playing-cards" style="top: ${this.top}px; left: ${this.left}px; z-index: 1;"/>`
    }

    moveToCardPile(pos, zIndex)
    {
        this.left = pos;
        this.element.style.left = pos + "px";
        this.element.style.zIndex = zIndex;
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

