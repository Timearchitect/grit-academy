// 2) Datatyper

let foo;

foo = "hej"; // string  , sträng text
foo = "c"; // string  , char/character, karaktär

foo = -50; // number  , integer , heltal
foo = 5.005; // number  , float double , decimaltal

foo = true; // boolean  , boolean
foo = false; // boolean  , boolean

// string + string = string
// string + number = string
// string + boolean = string

// number + number = number
// number + boolean = number

// boolean + boolean = number

// 3) Arrayer
let bar = "Reidar";
let bar2 = "Alrik";
let bar3 = "Kean";

console.log(bar2, bar, bar3);

// index       0          1        2
let que = ["Reidar",888, true];
console.log(que);

// tilldelning
bar += "EMMA";

que[0] += "EMMA";

que.push(888); // länst back lägger den till
que.pop(); // tar bort från längst bak
que.length; // retunerar en siffra på hur många element det finns i arrayen

console.log(bar);
console.log(que);

// 4) if satser / vilkorssatser

// ==   likamed
// > större än
// < mindre än
// >= större än likamed
// != inte lika med

let age = 50;
let vip = false;
// 1 i serie)
/* if (age >= 18) {
    console.log("YOU ARE AN ADULT!! 1"); //sant
} else {
    console.log("YOU ARE A CHILD!!! 1 "); //falskt
}


if(vip){
    console.log("YOU ARE A ARTIST!! 2"); //sant
} else {
    console.log("YOU ARE A PLEB 2"); //falskt
} */

// 2 vid sant gå vidare

if (age >= 18) {
    console.log("YOU ARE AN ADULT!! 1"); //sant
    if (vip) {
        console.log("YOU ARE A ARTIST!! 2"); //sant
    } else {
        console.log("YOU ARE A PLEB 2"); //falskt
    }
} else {
    console.log("YOU ARE A CHILD!!! 1 "); //falskt
}

// 3 vid falskt

if (age >= 18) {
    console.log("YOU ARE AN ADULT!! 1"); //sant
} else {
    console.log("YOU ARE A CHILD!!! 1 "); //falskt
    if (vip) {
        console.log("YOU ARE A ARTIST!! 2"); //sant
    } else {
        console.log("YOU ARE A PLEB 2"); //falskt
    }
}

if (age >= 18) console.log("YOU ARE AN ADULT!! 1"); //sant
else if (vip) console.log("YOU ARE A ARTIST!! 2"); //sant
else console.log("YOU ARE A PLEB 2"); //falskt

// 4) båda conditions i en
// || eller
// && och

if (age >= 18 && vip == true) {
    console.log("YOU ARE AN ADULT!! 1"); //sant
} else {
    console.log("YOU ARE A CHILD!!! 1 "); //falskt
}
