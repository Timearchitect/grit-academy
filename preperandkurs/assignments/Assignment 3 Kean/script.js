/*function myFunction(k, kean) {
    let sum = k + kean;
    console.log(sum);
}

// Calling the function
//myFunction(5, 10);

function charRemove(k, kean){

   return (k, kean)
   
}
let filter = charRemove();
console.log(filter);
*/

function charRemove(text, character) {
  let filteredText = "";
  for (let i = 0; i < text.length; i++) {
    if (text[i] !== character) {
      filteredText += text[i];
    }
  }
  return filteredText;
}

let inputText = "Sagan om ringen";
let filteredText = charRemove(inputText, "r");
console.log(filteredText);

