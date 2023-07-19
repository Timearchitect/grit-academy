// 2) Datatyper   7

let x = 5;

// + - * / operatorer

x = "hej"; //string   , string : sträng
x = "c"; //string   , char character : karaktär

x = 5; //number   , integer  :  heltal
x = 0.21524; //number   , float double : decimaltal

x = false; //bool     , boolean : boolean

x = { namn: "alrik" }; // object   , object: objekt

// String +  String = String
// String +  Number = String
// String +  bool = String

// Number + Number = Number
// Number + bool = Number

// bool + bool = Number

// 3)  Arrayer
let foo = 5;
foo = 8;

//index       0    1     2
let array = [5, "hej", true];
array[0] = 8;

array.push(999); // lägger in på slutet
array.pop(); // tarbort på slutet
array.shift(); // tarbort från början

console.log(foo);
console.log(array);

let queue = ["Caroline", "Jubin", "Sami", "Andreas", "Alrik"];
console.log(queue);

// 4) if else satser

// struktur + syntax

let age = 10;
let vip = true;

// condition koder
// == jämnföra
// === jämnföra + datatypen också
// > större än
// < mindre än
// >= störe än eller lika med
// <= mindre än eller lika med

/* 
// 1   ifsats efter varandra
if (age >= 18) {
    console.log("du är vuxen");
} else {
    console.log("du är ett barn");
}

if (vip == true) {
    console.log("du är en kändis!!");
} else {
    console.log("du är en vanlig person!!");
} 




// 2)   nästa if sats efter sant
if (age >= 18) {
    console.log("du är vuxen");
    if (vip == true) {
        console.log("du är en kändis!!");
    } else {
        console.log("du är en vanlig person!!");
    }
    
} else {
    console.log("du är ett barn");
}
*/

// 3)   nästa if sats efter falskt
if (age >= 18) {
    console.log("du är vuxen");
} else {
    console.log("du är ett barn");
    if (vip == true) {
        console.log("du är en kändis!!");
    } else {
        console.log("du är en vanlig person!!");
    }
}

// förenkling if else sats

if (age >= 18) {
    console.log("du är vuxen");
} else if (vip == true) {
    console.log("du är en kändis!!");
} else {
    console.log("du är en vanlig person!!");
}

//4 ) if sats med flera conditions/regler

// && och and
// || eller or
if (age >= 18 || vip == true) {
    console.log("YES");
} else {
    console.log("NO");
}

console.log("Vidare.....");
