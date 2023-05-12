"use strict";
// 6) funktioner

function alrik() {
    //definera en funktion
    //let foo= 5
    //koder
}

alrik(); // anropa / kalla

function eva(x) {
    x += "san";
    return x;
}

eva("hej");

/* console.log(foo);
let foo = 5
 */

// 7) objekt

let variabel = 5;
variabel = 8;

// index/element  0     1      2
let array = [5, true, "red"];
array[0] = 8;
array[8] ="alrik"
// property  key:value pair
let hus = { 
    doors: 5,
    sold: true,
    color: "red"
 };
 
hus.doors = 8;  // vanligaster sättet att tilldela
//hus["doors"] = 10

console.error(variabel);
console.warn(array);
console.log(hus);

function vroom() {  //function
    console.log("VROOOM!!!!!");
}

let bil = {
    doors: 6,
    vroom: function () {  //metoder är functioner i objekt
        console.log("VROOOM!!!!!");
    },
};
bil.tire = "dubbat"
console.log(bil);


console.log("hej");   //metod
alriksConsole.log("hej") //metod / property


let alriksConsole = {

    log:function (...data) {
        console.log(data[0]);
    }

}





