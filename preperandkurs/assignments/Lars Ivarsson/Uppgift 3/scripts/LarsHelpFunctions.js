//skapar funktion charRemove som tar in två parametrar
function charRemove (charOff, origText)
{
    /* ==== Den här biten fick jag inte till ====
    if (charOff != String || origText != String){
        console.error("Wrong datatype!");}*/

    //Skapar ett regular expression av indatan för att använda replace();
    var input = new RegExp (charOff, "g");
    origText = origText.replace(input, "");
    //returnar texten nu modifierad till utan vald character
    return console.log(origText);
}