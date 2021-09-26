
function charRemove (character, text) {
    for(let i =0 ; i<=  toString(text).length ; i++ ){
        text =  text.replace(character, "");
    }
    return text;

  }
 console.log(charRemove("c", "ccccccccccccccccccdc")) ;