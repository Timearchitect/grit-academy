/*
alert(111)
document.write(222)
console.log(333)
*/


// 1) variabler 

let foo  // deklarera en variabel som heter foo 
foo = 5  // tilldela nummer 5
foo = "hej" // tilldela strängen  "hej"

let bar = 10 //deklaration + tilldelning 

console.log(1 + 1);
console.log("hej" + "san");
console.log( 2 +"hej");

// PEMDAS
// Parentess , Exponent , Multiplikation , divition , addition , subtraktion
console.log((2+2)*3);


console.log(foo + bar)

console.log("hej" + 2 + 2 + 2);
/* 
foo = foo + 2 // ökar med 1
foo += 2      // ökar med 1  
foo ++        // ökar med bara 1
 */




// 2) Datatyper
//totalt 7 primitiva datatyper


let x

x = undefined  // undefined , odefinerad tomt 

x = "hej" // string , sträng text
x = `@`   // string char , karaktär

x = 5   // number integer, heltal
x = 0.5 // number float double, decimatal 

x = true  // boolean
x = false  // boolean

//STRING + STRING = STRING
//STRING + NUMBER = STRING 
//STRING + BOOLEAN = STRING

//NUMBER + NUMBER = NUMBER
//NUMBER + BOOLEAN = NUMBER

//BOOLEAN + BOOLEAN = NUMBER