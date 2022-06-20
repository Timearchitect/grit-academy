function charRemove(char , word){

   // for (let i =0 ; i<word.length ;i++)  
    //    word=word.replace(char,"");

    return    word.replaceAll(char,"");
    
    }

console.log(charRemove("i am batman", ""));
