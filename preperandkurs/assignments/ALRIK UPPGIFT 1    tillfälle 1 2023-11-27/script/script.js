/*
alert(123)
document.write(456)
console.log(789)
*/

//variabler är en behållare

let foo; // deklarera en variabel som heter foo
// skapat en behållare som heter foo

foo = 5 + 1; // tilldela variabeln foo med siffran 5
// jag la till 5 i foo

foo = "hej" + (1 + 1); //tilldelning av en texten hello world

//console.log(foo);

// 2 Datatyper
let x = true;

//             String
x = "hejsan"; // String , sträng , text
x = "@"; // char , karaktär

//             number
x = -5; // integer , heltal
x = 0.5; // float , decimaltal

//             boolean
x = false; //boolean, bool

//String + String -> String
//String + number -> String
//String + boolean -> String

//number + number -> number
//number + boolean -> number

//boolean + boolean -> number

//console.log(typeof x);

// Arrayer
// arrayer har siffror som lådor

let y;
y = 5;

let hylla; //deklarerar en variabel hylla
//0    1    2     3   4
hylla = [5, 88, "hej", true, y];

hylla[0] = "Alrik";

let namnLista = ["Linnea", "U M", "Adam", "Annelina", "Melvin"];

//namnLista.shift(); // tarbort första i array
//namnLista.push("EMMA") // lägg till på slutet
//namnLista.pop() // ta boprt sista

namnLista[0] = "ALRIK";

// 3)if satser

//(condition)

//  < mindre än
// > större än
// == lika med
// === lika med & samma datatype
// != INTE LIKA MED
// <= mindre än eller lika med
// >= större än eller lika med

//Natt klubb scannar id
/*
if (vip == true) {
    // fråga 1
    console.log("WELCOME my best VIP customer :)");
} else { // alternativt
}

if (myAge >= 18) {
    //fråga 2
    //true
    console.log("MYNDIG!!!");
} else {
    // false
    console.log("Mindreårig!!!");
}*/

let myAge = 18;
let vip = true;
// && och and
// || eller or
if (vip == true && myAge >= 18) {
        var foo4 = 888
        console.log("du är MYNDIG och  VIP!!!");
} else {
        console.log("du är antingen för ung eller inte vip...tyvärr :( ");
}


// vidare...
