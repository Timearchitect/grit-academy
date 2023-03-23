/* arrayer */

let foo = 5;
foo = 6;

// arrayer har en längd på hur många saker den innehåller
// index      0    1     2
//varje "låda" heter element/index
let array = [5, 999, "hej"];

array[0] = 6;
/* array = 6 */ //skriva över till en variabel med värdet 6

array[2] = array[0] + array[1]; //använd flera lådor och tilldela till en annan låda

array[3] = "YO!!!";

array[7] = "TJENARE";
array.push("HELLO WORLD"); // lägger till ett element på slutet
array.pop(); //tar bort det sista elementet

array.push(888, "hej", "ALRIK"); // lägger till flera på slutet

console.log("variabeln foo: " + foo); //variabel
console.log(array); // visar hela arrayn
console.log(array[0]); // visar lådan

/* datatyper */
let a;

let y = "hej"; // string ,text
let y2 = "c"; // string char character, karaktär

let x = 5; // number  integer ,heltal
let x2 = 0.5; // number  float   ,decimatal

let z = true; // boolean bool 1, boolean
let z2 = false; // boolean bool 0, boolean

console.log(typeof a);
//string är dominant
/* string + number --> string */
/* string + boolean --> string */
/* string + string --> string */

// number bror på om det går att kalkylera
/* number + boolean --> number */
/* number + number --> number */

//boolean är recessiv
/* boolean + boolean --> number */

// if satser
let age = 18;
let vip = true; //very important person

//if satser består a en condition/regel
// vi veta om det är true eller false
// == jämnför om det är samma
// < mindre än
// > större än
// <= mindre eller likamed än 
// >= större eller likamed än 

if( vip == true){
    console.log("Du kan komma in i klubben");
} else {
    console.log("ni är inte en vip");
}



if (age >= 18) {
    // kör nästa bit kod om det är true
    console.log("Du är myndig");
    console.log("TRUEE!!!!!!!!!");
} else {
    // när det är false så kör den detta koder 
    console.error("Du är mindreårig , tyvärr");
    console.error("false!!!!!!!!!");
}










console.log("vidare...");
