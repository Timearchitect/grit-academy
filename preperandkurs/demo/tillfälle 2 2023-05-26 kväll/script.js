//2 Datatyper

let foo;

foo = "hej"; // string : sträng text
foo = "@"; // string , char character : karaktär/symbol

foo = 5; // number , integer : heltal
foo = 5.5; // number , float double : decimaltal

foo = true; // boolean : boolean

// string + string = string
// string + number = string
// string + boolean = string

// Number + Number = Number
// Number + boolean = Number

// boolean + boolean = Number

// (4) ifsatser
let age = 50;
let vip = true;
// == jämnföra
// >
// <
// >=
// <=
// !=  inte lika med

//1) serie
if (age >= 18) {
    console.log("DU FÅR KOMMA IN 1");
} else {
    console.log("Du är för ung   1");
}

if (vip == true) {
    console.log("Du en artist 2");
} else {
    console.warn("Du är en pleb 2");
}

//2) gör nästa if sats vid sant

if (age >= 18) {
    console.log("DU FÅR KOMMA IN 1");

    if (vip == true) {
        console.log("Du en artist 2");
    } else {
        console.warn("Du är en pleb 2");
    }
} else {
    console.log("Du är för ung   1");
}

//3) gör nästa if sats vid falskt

if (age >= 18) {
    console.log("DU FÅR KOMMA IN 1");
} else {
    console.log("Du är för ung   1");

    if (vip == true) {
        console.log("Du en artist 2");
    } else {
        console.warn("Du är en pleb 2");
    }
}


if (age >= 18) 
    console.log("DU FÅR KOMMA IN 1");
else if (vip == true) 
    console.log("Du en artist 2");
else 
    console.log("Du är en pleb 2");


//4) 2 regler på en if sats

// && och
// || eller

if(age >= 18 || vip == true)
    console.log("YES");
else 
    console.log("NO");


console.log("vidare....");
