// (2) datatyper
// 7 st primitiva datatyper

let x;

//string
x = "hej"; // string, sträng
x = "#"; // char , karaktär

//number
x = 5; // integer, heltal
x = 0.1; // float double , decimaltal

//boolean
x = false; //boolean , boolean

//object
x = { antal: 5, sold: true, word: "hej" }; // object,objekt
x = [5, true, "hej"]; //array, array

//string + string = string
//string + number = string
//string + boolean = string

//number + number = number
//number + boolean = number

//boolean + boolean = number

// (3)arrayer

let foo = 5;
foo = 8;
foo = ["hej", "san", 888];

// index     0     1        2
let array = [5, "hejsan", 0.5];
array[0] = 8;

let queue = ["Hanna", "Benny", "Alrik", "SEK"];
queue.shift(); // tar bort den första index i arrayen
queue.pop("Cecilia"); // tar bort från slutet av en array

queue.push("Cecilia"); // lägger in på slutet av en array

queue.sort(); // sorterar arrayen

queue.toString(); // gör om till en text

queue.join(" "); // klistra ihop med olika tecken

// 4) if satser
// syntaxen , if (condition)
// condition ge alltid ut boolean
//  ==   jämnför
//  ===   jämnför + datatypen
//  !=    är den skillnad
//  < mindre än
// > större än
// <= mindre + likamed
// >= större + likamed
let age = 18;
let vip = false;
// 1) ifsats i en serie
// if (age >= 18) {
//     console.log("du är myndig");
// } else {
//     console.log("du är mindreårig");
// }

// if (vip) console.log("du är kändis");
// else console.log("du är en pleb");

// 2) ifsats efter sant

if (age >= 18) {
    console.log("du är myndig");
    
    if (vip) 
        console.log("du är kändis");
    else 
        console.log("du är en pleb");

} else {
    console.log("du är mindreårig");
}


// 3) ifsats efter falskt

if (age >= 18) {
    console.log("du är myndig");
} else {
    console.log("du är mindreårig");
        
    if (vip) 
        console.log("du är kändis");
    else 
        console.log("du är en pleb");
}


// förenkling else if sats

if (age >= 18) 
    console.log("du är myndig");
else if (vip) 
    console.log("du är kändis");
else 
    console.log("du är en pleb");


// 4) 2 ifsatser med conditions
// && och and 
// || eller or


if(  age >= 18 && vip )
    console.log("JAA");
else 
    console.log("NEJ");



// true väg

// false väg / optional , skippar true vägen
