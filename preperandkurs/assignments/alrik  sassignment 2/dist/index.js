"use strict";
let pTagg = document.createElement("p");
pTagg.innerText = "hello";
document.body.appendChild(pTagg);
let foo = 5; //explicit deklarerat en variabel
foo = 888;
let bar = "hej"; //inplicit deklarerat en variabel (implyed)
bar = "hejsan";
let array = [5, 6, 8];
array = [0, 5, 0.5];
/* function */
function addition(tal1, tal2) {
    return tal1 + tal2;
}
function printStuff(text) {
    pTagg.innerText = text;
    return;
}
printStuff("hejsan");
console.log(addition(5, 5));
/* objects */
let a = 5; //explicit deklarerat en variabel
let arr = [5, 6, 8];
//Objectet använder productType
let product = {
    inventory: 100,
    name: "Jordan air 2000",
    description: "best shoes of the year 2022 by: Ayub",
    url: "https://....",
};
let realName; //explicit typdeklarerat 
realName = "alrik";
let obj;
obj = { username: "timearchitect" };
let calulator;
calulator = {
    brand: "casio",
    addition: (tal1, tal2) => {
        return tal1 + tal2;
    },
};
// tuple example som visar att den har ett visst antal i längd & datatyp
// string [] kan ni ha hur mycket element som helst 
let tuple;
tuple = [[1, 2], 5, false, "YO", { user: "alrik", password: "monkey123" }];
let domObj;
domObj = document.getElementById("test");
nullCheck(domObj);
function nullCheck(obj) {
    if (obj == null)
        console.error("DU HAR QUARYAT FEL , fixa det!!!");
    else
        obj.innerHTML = "SUCCESS!!!";
}
// setting för developers
let t_shirtColor;
t_shirtColor = "red";
console.log(2 /* difficultyLevel.hard */);
printStuff(0.5 /* difficultyLevel.easy */.toString()
    + "multiplyer on score!");
//kör funktion i en funktion, callback
function runFunc(f) {
    f("HEJSAN");
}
console.log("tjenare");
runFunc(console.log);
