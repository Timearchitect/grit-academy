/* variabler
 */
console.clear();

let foo = 5;
var bar = 'hej';

bar = 888;

bar = bar + 1; // ökar
bar += 1; // ökar
bar ++; // ökar med ett

/* array */
//             0      1      2
let array = [888, "hej", true];
array[2] = "hello";

console.log(array[1]); //skriver ut en index
array.push(345678, "888");
array.pop();
array.sort()
/* datatyper */

/* 
string     
number
boolean
 */

if (true) {
    console.log("YES"); // sant koder
    console.log("YES"); // sant koder
} else console.log("NO"); //falsk koder

/* loopar */
let count = 0;
while (count < 10) {
    count++;
    console.log("loop " + count);
    if (count == 6) break;
}

let i = 0;
while (i < 3) {
    console.log(array[i]);
    i++;
}

for (let i = 10; i >= 0; i--) {
    console.log("for loop " + i);
}

/*  funktioner  */
let bar2 = 888;

function checkAge(age) {   // definera/deklarera checkAge med parametern age
    if (age >= 20) console.log("vuxen!!");
    else console.log("BARN!!");
    return "YO"
    
}

checkAge(30);   // anropa/kalla/call  checkAge med parameter 30
checkAge(10);

updateCartTotalSum();

function updateCartTotalSum() {
   // plusar varor
   // plusar varor
   // plusar varor
   // plusar varor
   // plusar varor
   // totalbelopp
}


/* OBJEKT */



let adress = "yxegatan 45b"
let zipcode = 21564
let color = "red"
let apartmentNumber = 1002
let floors = 7

//index                 0           1      2    3 
 let husArray = [
    "yxegatan 45b",
    21564,
    "red",
    1002,
    7
]

console.log(husArray);
husArray[1] = 55555

let husObjekt = {
    adress:"yxegatan 45b",
    zipcode:21564,
    color:"red",
    apartmentNumber:1002,
    floors:7,
    sold:true,
    array: ["hej","san","Liban"],
    log : function ( x ){
        console.log(x);
    } 
}
console.log(husObjekt);   // metod är funktion i ett objekt
husObjekt.zipcode = 55555

alert() // funktion inbyggd

let alriksConsole = {
    log : function ( x ){
        console.log(x);
    } 
}

husObjekt.log()


 x = 5;
 x++;
 z = x;

