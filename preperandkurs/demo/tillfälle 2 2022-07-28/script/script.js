let foo = 5;
foo = 888;

// index     0     1       2
let foo2 = [5, "hej", true];
foo2[0] = 888;

console.log(foo);
console.log(foo2);

foo2.pop(); // tarbort sista boxen
foo2.push(0.5); //lägger till på slutet

// visar hur många element i arrayn
console.log(foo2.length);

//praktiskt exempel
let que = ["Elias", "Anna", "Alrik", "Mithun"];
console.log("Kön är : " + que.length);

console.log("HEJSAN");

// --- iF SATSER---
// alla conditions ger alltid true eller false
// boolean är true eller false

// Olika Conditions(regler)
// == jämnför vänster och höger sida
// === samma med jämför datatypen också
// < mindre än
// <= mindre eller likamed
// > större än
// >= störrre eller lika med
// !=  inte likamed

//let age = 15;


// 1) if satser efter varandra
/*
if (true) 
*/

// if sats  när det är sant
/*
if (true) {
    console.log("YES 1");
    
    if (true) 
    console.log("YES 1");
    else 
    console.log("NO 1");
}
else 
    console.log("NO 1");


*/

//3) ifsats efter false
/*
if (false) 
    console.log("YES 1");
else if (true) 
    console.log("YES 1");
else if (true) 
    console.log("YES 1");
else 
    console.log("NO 1");   
    */
    
// 4)  två conditions i en ifsats

let age = 10;
let vip = true;

// && och / and om båda är true då är all true    
// || eller / or om någon är sann då är allt sant
if ( age >= 18  ||  vip == true  ) 
   alert("hej") 
   else
    console.log("NO ");


