//  (1) Variabler

let x = 5; //var let const är till för deklaration

x = "hej";

x = true;

x = 1;

x = x + 1; //ökar med 1
x += 1; //ökar med 1
x++; //ökar bara med 1

// (2) Datatyper
// Det finns 7 datatyper
// color theme Dark+ v2
let y = 5;

y = "hello"; //string ,sträng
y = "@"; //string char, karaktär

y = 5; // number integer
y = 0.5; // number float/double

y = true; //boolean, boolean

//STRING + STRING = STRING
//STRING + NUMBER = STRING
//STRING + BOOLEAN = STRING

//NUMBER + NUMBER = NUMBER
//NUMBER + BOOLEAN = NUMBER

//BOOLEAN + BOOLEAN = NUMBER

// 3) Array
let box = 5;
box += 1;
//console.log(box);

// index           0     1      2       3
let hylla = ["sara", "hej", "olof", "Alrik"];
hylla[0] += 1;

hylla.sort();
hylla.reverse();

hylla.push("hello");
hylla.pop();

//console.log(hylla);

// 4) if satser / villkorsatser behöver true eller false
// condition/ regel
// == jämför
// > större än
// < mindre än
// >= större än eller likamed
// <= mindre än eller likamed

let age = 5;
let vip = true;

// 1) if satser i serie
if (age >= 18) {
    console.log("VUXEN");
} else {
    console.log("BARN");
}

if (vip) {
    console.log("du är en kändis");
} else {
    console.log("du är en vanlig person");
}

// shift + alt + f  format document

//2)

if (age >= 18) {
    console.log("VUXEN");
    if (vip) {
        console.log("du är en kändis");
    } else {
        console.log("du är en vanlig person");
    }
} else {
    console.log("BARN");
}

// 3)

if (age >= 18) {
    console.log("VUXEN");
} else {
    console.log("BARN");
    if (vip) {
        console.log("du är en kändis");
    } else {
        console.log("du är en vanlig person");
    }
}

//förenklas

if (age >= 18) {
    console.log("VUXEN");
} else if (vip) {
    console.log("du är en kändis");
} else {
    console.log("du är en vanlig person");
}


age = 50
//4)
// && och
// || eller
if(age >= 18 && vip){
  console.log("YES");
} else {
    console.log("NOO");
}


