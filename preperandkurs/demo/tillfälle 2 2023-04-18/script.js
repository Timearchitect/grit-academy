// 2) Arrayer
// variabler i en serie

let foo = 5; //deklaration med en tilldelning av en siffra 5
foo = 8;
console.log(foo);
foo = ["hej", 5]; // tilldela variabeln till en array

//index        0       1        2          3
let billy = ["sala", "hej", "tjenare", "alrik"]; //deklaration med en tilldelning av en array med 5
billy[2] = 100;
console.log(billy[0]);
console.log(billy[0] + billy[3]);

console.log(billy.length); // få ut arrayens längd(antal innehåll)
billy = 5; // tilldela så att arrayen blir till en variabel

// lägga till till en array

let hylla = ["alrik", "sala", "mimmi"];

hylla[5] = "henrik"; // lägger in till en specifik låda
hylla.push("hej"); //lägger in på slutet

hylla.pop(); //tar bort från slutet

hylla.sort();

hylla.reverse();

hylla.shift(); //tar bort första elementet

console.log(hylla);

// 3)  if satser
// condition / regel
// == jämnföra

// < mindre än
// > större än
// <= mindre än eller likamed
// >= större än eller likamed
// != inte lika med

let knapp = document.getElementById("submitAge");
let input = document.getElementById("ageInput");

knapp.addEventListener("click", () => {
   
    let age = parseInt(input.value);

    if (age >= 18  && age < 68 ) {
        //sant
        alert("du är vuxen!!");

    } else {
        //falskt
        alert("du är ett barn eller pensionär");
   
    }

});


let x = 5


x = x + 1
x += 1
x ++


 