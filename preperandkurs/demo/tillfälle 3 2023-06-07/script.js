// 4) if satser  / villkorssatser
// syntax

// i en if sats parentess (condition/regel)
// alla conditions retunerar en boolean
// == jämnför
// === jämnför samma värde + datatyp
// != inte lika med
// !== inte lika med samma värde + datatyp
// <  mindre än
// > större än
// <= mindre än eller samma
// >= större än eller samma

console.log();
let age = 12;
let vip = false;

//1) if sats is en serie
/*
if (age >= 18) {
    console.log("YES");
} else {
    console.log("NEJ");
}

if (vip == true) {
    console.log("YES");
} else {
    console.log("NEJ");
}

//2) ifall första är sant gå vidare

if (age >= 18) {
    // sant
    console.log("YES");

    if (vip == true) {
        console.log("YES");
    } else {
        console.log("NEJ");
    }
} else {
    //false
    console.log("NEJ");
}

//3) ifall första är false gå vidare

if (age >= 18) {
    console.log("YES");
} else {
 
    if (vip == true) {
        console.log("YES");
    } else {
        console.log("NEJ");
    }
}

// för enkling

if (age >= 18) {
    console.log("YES");
} else if (vip == true) {
    console.log("YES");
} else {
    console.log("NEJ");
}

//4) flera conditions i en if sats
// && och       shift +  6 för &
// || eller     altgear + < för |
*/

if(true && true)
    console.log("YES");
else
    console.log("NOO");



console.log("vidare...");
