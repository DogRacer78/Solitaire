function CardType(suit, value)
{
    // use 11, 12, 13, 14 for face cards
    this.suit = suit;
    this.value = value;

    // compare two cards
    // Returns true if the current card can be placed on top of the other card
    // a 2 of hearts can be placed on a 3 of spades
    this.compare = function(other)
    {
        if (this.suit == other.suit)
        {
            return false;
        }

        if (this.value >= other.value)
            return false;

        if (this.value + 1 !== other.value)
            return false;

        if (this.suit === "Spades" && other.suit !== "Clubs")
            return true;

        if (this.suit === "Clubs" && other.suit !== "Spades")
            return true;

        if (this.suit === "Hearts" && other.suit !== "Diamonds")
            return true;

        if (this.suit === "Diamonds" && other.suit !== "Hearts")
            return true;
        
    }

    // compare two cards when they are being placed on top of each other in the end pile
    // a 2 must be placed on top of an ace
    this.compareToDone = function(other)
    {
        if (this.suit !== other.suit)
            return false;

        if (this.value !== other.value + 1)
            return false;

        return true;
    }
}