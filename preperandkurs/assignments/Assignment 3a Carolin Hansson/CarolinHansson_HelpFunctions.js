

// 3a: The Remover - To filter out a character on any text and output the results



function charRemove(character, text) {
    return text.replaceAll(character, "");
}

let inputText = "I'm singing in the rain, Just singing in the rain, What a glorious feelin, I'm happy again, I'm laughing at clouds, So dark up above, The sun's in my heart, And I'm ready for love, Let the stormy clouds chase, Everyone from the place, Come on with the rain,I've a smile on my face, I walk down the lane, With a happy refrain, Just singin', singin' in the rain...";
let char = "s";

document.write(charRemove(char, inputText));














