//Loopar
//while

if (false) {
    console.log("if sats");
}

let i = 0;

while (i < 3) {
    console.log("while loop: " + i);
    i = i + 1;
}

//do While

i = 0;

do {
    console.log("dowhile loop: " + i);
    i = i + 1;
} while (i < 3);

//for loop
//   deklaration  condition  tilldelning/ändring
for (let i = 0; i < 3; i++) {
    console.log("for loop: " + i);
}

console.log("vidare...");

//for
let que = ["Anna", "Carl", "Alrik", "Sara", "Henrik", "SANDRA"];

for (let i = 0; i < que.length; i++) {
    document.write("for loop: " + que[i] + "<br>");
}

for (let i = 0; i < 100; i++) {
    document.write("<img src='https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg' width='50'>");
    if (i == 3) break;
}

// 6)  funktioner
// alert()
// syntax
let money = 999;

function balance(currency) {
    let symbol = "";
    if (currency == "USD") symbol = "$";
    if (currency == "SEK") symbol = "kr";
    document.body.innerHTML = "MONEY:" + money + symbol;

    //document.write("MONEY:" +  money);
}

// parameter
function addition(tal1, tal2) {
    if (typeof tal1 == "number" && typeof tal2 == "number") console.log(tal1 + tal2);
    else console.warn("not a number");
    return 100;
}
addition("5");

// returnering
let foo = addition(1, 1);
let bar = document.getElementById("vip");
console.log(balance());

// stackoverflow
function infinity() {
    console.log("infinty!!! ");
    beyond();
}

function beyond() {
    console.log("beyond!!! ");
    infinity();
}
