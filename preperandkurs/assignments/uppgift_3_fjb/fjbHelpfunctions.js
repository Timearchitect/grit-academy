function charRemove(character, text) {
    if (! (typeof character == "string") && (typeof text == "string")) {
        console.error("wrong datatype");
        return;
    }
    else{
        return(text.replaceAll(character,""))
    }
}