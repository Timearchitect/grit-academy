// Datatyper

//

let foo = 5;

// Number
foo = 5; // Integer , heltal
foo = 0.2; // float , decimaltal

// String
foo = "hello" // string , text
foo = 'c'    // char, character

// Boolean
foo = true;  // 1,  boolean , boolean
foo = false; // 0, kan tolkas som siffror

// Arrayer
// variabel som kan ha fler data i

let bar;  // DEKLARATION AV EN VARIABEL SOM HETER BAR
bar = 5;   // tilldelningen

let bar2;  // Deklarationen
bar2 = [5 , 0.2 , "hello" , true]; //tilldelningen


let que = ["Oguzcan","GE","Rebeca","Ismail","Ramin","Alrik"];

foo = 888;

// if satser
//syntaxen för en if sats
// if ( true||  false)

// conditions
 1 == true  // 'r sant
// === jämför + kollar datatypen
 1 === true // är falskt för det är olika datatyper
 // !=  inte likamed
 1 != true // falskt
// < mindre än , > större än
 1 < 2  // sant
 1 > 2  // falskt 
 // >= större än + likamed <= mindre + lika med 



/*if( foo == 777 ){ // sant
    console.log("YES 1");
    console.log("YES 2");
} else {   //falsk
    console.log("NO 1");
    console.log("NO 2");
}*/

//regel : Condition
// sant väg 
// falsk väg
let age = 25;
let isVIP = true;

// 1) individuella if satser
/*
if(age >= 17 ){
    console.log("age YES 1");
}else {
    console.log("age No 1");
}

if(isVIP == true ){
    console.log("vip YES 2");
}else {
    console.log("vip  No 2");
}*/




//  2) efter 1 är sant kör 2
// nestad
/*
if(age >= 17 ){
    console.log("age YES 1");
    if(isVIP == true ){
        console.log("vip YES 2");
    }else {
        console.log("vip  No 2");
    }
}else {
    console.log("age No 1");
}
*/


//  3) efter 1 är falskt kör 2
// nestad
/*
if(age > 17 ){
    console.log("age YES 1");
}else {
    console.log("age No 1");
    if(isVIP == true ){
        console.log("vip YES 2");
    }else {
        console.log("vip  No 2");
    }
}
*/

// 3 förkortat då 1 är falskt
/*
if(age >= 17 )  // lättt att uppfylla
    console.log("age YES 1");
else if(isVIP == true )  // lite svårare / undantag
    console.log("vip YES 1");
else   
    console.log("  No 2");
*/


// 4) 2 if satser tillsammans
//   &&  betyder: och, and.  är strikt (måsta ha båda sidorna sanna) 
//   ||  betyder: eller, or. är lös (behöver bara ha 1 sidfa sann)

if(age > 17 && isVIP == true  ){
    console.log("YES");
}else {
    console.log("No");
}   




let DOM = document.getElementsByTagName("input");

console.log(DOM.);