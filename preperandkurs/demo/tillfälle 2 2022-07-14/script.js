// Arrayer
alert("NEJ")
// array = variabler fast i en serie

let foo = 888; // tilldela
let foo2 = 999; // tilldela
let foo3 = "hello"; // tilldela
let foo4 = "hej"; // tilldela

let array; // deklarerat en variabel med namnet array
//index   0    1      2     3
array = [888, 999, "hello", "hej"]; //tilldelar en array med 888

array[0] = array[2];
foo = foo3;

array = "HEJSAN!!";

// Datatyper testa med typeof

// string
foo = "hello"; // String , sträng (String str)
foo = "@"; // char , karaktär (char)

// number
foo = -5; // integer, heltal (int)
foo = 0.5; // float , decimaltal (float  f)

// boolean
foo = true; // boolean, boolean (bool)
foo = false; // true tolkas som 1 & false tolkas som 0

// if sats
// condition ska finnas i parantesen()
// condition är en regel typ som resulterar i sant eller falskt
// == jämför båda sidorna om värdet är samma
// < mindre än
// > större än
// <= mindre eller lika med
// >= större eller lika med

//let inputValue = document.getElementsByTagName("input")
let inputValue = document.getElementById("ageInput");
//console.log(inputValue.value);

let age = 50;
let VIP = true;
/* 1)
if (VIP == true) {
    console.log("ja, du får gå till klubben du är VIP");
} else {
    console.log("nej, du är inte VIP");
}


if (age >= 18) {
    console.log(":)");
    console.log("ja, du får gå in ");
} else {
    console.log(":(");
    console.log("nej, du får inte gå in ");
}
*/
/* 3)
if (VIP == true) {
    console.log("ja, du får gå till klubben du är VIP");

} else {
    console.log("nej, du är inte VIP");
    if (age >= 18) {
        console.log(":)");
        console.log("du är myndig");
    } else {
        console.log(":(");
        console.log("du är mindreårig ");
    }
}
*/

 // && och and
 // || eller or
if (VIP == true || age >= 18) {
    console.log("ja");
} else {
    console.log("nej");
}

