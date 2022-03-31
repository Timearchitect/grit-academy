// DATATYPER (i javascript finns det 7 men dessaa 3 är viktigast )
let foo;

// Number 
foo = 55;  // Integer - heltal
foo = 2.5; // float - decimaltal   // decimaltecken är punkt.

//string
foo = "tjena" // string - sträng/text
foo = '@'     // char/character - karaktär/tecken

//boolean
foo = true;   // boolean - boolean
foo = false;


let foo2 = [ 5, "hello" , true , 0.5 ];


//if satser , syntax , termer

//let foo = 5;  tilldelning

 // ( condition ) 
 // == jämnförelse  som ger ut true eller false
 
2 == 1+1    // sant
4 == 2*2    // sant
1.0 == 1     // sant
1.0 === 1   // sant ( trippel =, kollar datatypen)
1 === true      // falskt
1  == true     // sant
"50" == 50      // sant
"true" == true  // falskt true innehåller 1

/*
// Failed exempel för <script> var före <body>

if( document.getElementById("input").value == 1) 
    console.log("yes");
else 
    console.log("no");


if( document.getElementsByTagName("h1")[0].innerText == "Hello") 
    console.log("yes");
else 
    console.log("no");

*/
/*
//  (1) SEPARATA IF satser
if( 1 == 1)  // första
    console.log("yes");
else 
    console.log("no");


if( 2 == 2)  // andra
    console.log("yes");
else 
    console.log("no");



// (2) IF sats efter sant

if( 1 == 1)  // första
    {
        if( 2 == 2)  // andra
            console.log("yes");
        else 
            console.log("no");
    }
else 
    console.log("no");



// (3) if sats efter falskt

if( 1 == 1)  // första
    console.log("yes");
else 
{
    if( 2 == 2)  // andra
        console.log("yes");
    else 
        console.log("no");
}
*/

// (4) 2 conditions i en ifsats

// && and
// || eller

if( true &&  true  ||  false )
    console.log("yes");
else 
    console.log("no");   // vid självklara false , vissa IDE resultatet med utgråad kod rader









console.log("vidare...");     











