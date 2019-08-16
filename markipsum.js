words = [
    "nuts", "simply", "meme review", "bask", "the colors", "that pill be looking fine", "the", "is",
    "arsenic poisoning", "remarkable", "Mark", "Xu", "sticker", "brand", "lifestyle", "philosopher", "designer",
    "programmer", "first", "second", "third", "beautiful", "vampire", "wants", "and", "the sauce", "sauce", "lost in", "don't get", "worms and bugs",
    "high in protein", "delicious when fried", "wokable", "drips", "hard", "drips hard", "P&G water packets", "river",
];

const word = function() {
    return words[Math.floor(Math.random() * words.length)];
};

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function punctuation() {
    let seed = Math.random();
    if (seed < 0.1) return "!";
    if (seed < 0.3) return "?";
    if (seed < 0.35) return "....";
    return ".";
}

const sentence = function() {
    let count = Math.floor(Math.random() * 9);
    // Add root word
    let string = capitalize(word());
    for (let w = 0; w < count; w++) {
        if (Math.random() < 0.2) {
            string += ","
        }
        string += " " + word();
    }
    string += punctuation();
    return string;
};

const paragraph = function(sentences = 8) {
    let text = sentence();
    for (let s = 1; s < sentences; s++) {
        text += " " + sentence();
    }
    return text;
}
