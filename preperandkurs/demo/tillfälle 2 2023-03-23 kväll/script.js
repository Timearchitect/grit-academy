/* array */

let foo = 5;

//index       0    1     2
let array = [5, 888, "hej"]; // har 3 element eller 3 i längd
array[2] = 6;
array[5] = "tjenare";
array.push("YO!!"); // lägger till på slutet
array.pop(); // tarbort sista elementet

/* array = "hello world" // man kan skriva över allt genom en tilldelnign på namnet
 */
console.clear(); //rensar consolen
console.log(array);

let que = ["Anna", `Ida`, "Liban", "Alexsander", "Hanna", "Medina"];
que.sort((a, b) => a.length < b.length);
que.reverse();

/* Datatyper */

//string
let x = "hej"; //string   ,sträng
let x2 = "c"; //string char/charater, karaktär

//number
let y = 5; //number integer , heltal
let y2 = 0.5; //number float f , decimaltal

//boolean
let z = true; //boolean bool, boolean
let z2 = false; //boolean bool, boolean

//string + string = string
//string + number = string
//string + boolean = string

//number + number = number
//number + boolean = number

//boolean + boolean = number

let age = 20;
let vip = true;
/* if satser */
// i parentesen soka man ha en regel/condition
// ta egentligen emot  en boolean

// == jämnföra
// === jämnför + datatypen
// > större än
// < mindre än
// >= större än eller likamed
// <= mindre än eller likamed
// != inte lika med

//1)
/* if( age >= 18 ){ // sant koden efter {
    console.log("åldern är ok!!!! 1");
} else {
    console.log("för ung!!!! 1 ");
}


if( vip == true ){ // sant koden efter {
    console.log("du är en artist!!!! 2 ");
} else {
    console.log("du är en regular peasent!!!!2");
}
 */

//2) NÄR DET ÄR SANT KÖR NÄSTA IF SATS
/* if (age >= 18) {
    console.log("åldern är ok!!!! 1");

    if (vip == true) {
        console.log("du är en artist!!!! 2 ");
    } else {
        console.log("du är en regular peasent!!!!2");
    }
} else {
    console.log("för ung!!!! 1 ");
} */

//3) NÄR DET ÄR FALSKT KÖR NÄSTA IF SATS
/* if( age >= 18 ){ // sant koden efter {
    console.log("åldern är ok!!!! 1");
} else {
    console.log("för ung!!!! 1 ");
    if (vip == true) {
        console.log("du är en artist!!!! 2 ");
    } else {
        console.log("du är en regular peasent!!!!2");
    }
}
// FÖRKORTNING , IF ELSE SATS
if (age >= 18)
    console.log("åldern är ok!!!! 1");
else if (vip == true) 
    console.log("du är en artist!!!! 2 ");
else 
    console.log("du är en regular peasent!!!!2");
 */

//4) 2 REGLER I SAMMA IF SATS


// && är och / and
// || eller / or
if(  age >= 18 && vip == true  ){
    console.log("YEA");
} else {
    console.log("NOPE");
}


console.warn("vidare....");

let h1DOM = document.createElement("h1")
h1DOM.innerHTML="SLUT FÖR IDAG"

document.body.appendChild(h1DOM)


let inputText = document.getElementsByTagName("input")

console.log(inputText);