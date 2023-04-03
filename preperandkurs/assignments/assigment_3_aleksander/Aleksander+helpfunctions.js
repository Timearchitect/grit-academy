//text= ["l", "hello"];

function charRemove(letter, text) {
    let resultatText = "";
    for (let i = 0; i < text.length; i++)
        if (text[i] != letter) resultatText += text[i];
    return resultatText;
}

//                  bokstav, text  
function charRemove2 (l, text){
    for (let i = 0; i < text.length; i++)
      text=text.replace(l, '')
    console.log(text);
  }


function charRemove3 (l, text2){
    console.log(text2.replaceAll(l, ''));
}

let bar = 1 

bar = bar + 1;  // ökar med 1

bar += 1 // ökar med 1

bar ++; // ökar bara med 1



/* function charRemove2 (l, hello){

    let text2 = "l hello";
    console.log(text2.replace(l, ' '));

}
 */



