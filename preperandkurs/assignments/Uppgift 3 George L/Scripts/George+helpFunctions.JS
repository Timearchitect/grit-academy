function charRemove  (character, text){

    if (typeof character=== "string" && typeof text === "string" ){
        
        let newString = text.replaceAll(character, "");
        return newString
    }
    else {
        console.log("Wrong datatype");
        return;
        close();
    }

}