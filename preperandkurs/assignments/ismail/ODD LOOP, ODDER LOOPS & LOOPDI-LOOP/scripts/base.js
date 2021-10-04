function filterCharacters(word,letter){
    word = word.replace(letter, '0');
    console.log(word);
}

filterCharacters("Ismail", "a")