


// Loopar repetera koder
// while  do-while for

// (condition)
// vid sant repeterar kod i {...  }
// vid falskt så skippar den

let count = 0;
while(count < 3 ) {
 console.log("while "+ count);
 count = count + 1;
}

count = 0;

do{
    console.log("do-while "+ count);
    count += 1;
}
while(count < 3 )


// ( engångs kod; condition; repeterande kod  )

for(   let i = 0;    i < 3;     i++   ){
    console.log("for "+ i);
}
console.log(count);


count = count + 1;  

count += 1; // öka med 1     

count ++; // bara +1


console.log("..vidare..")

// array
let que = ["Ida","Pontus","Alrik","Martin","George","William","Sara"];

for(   let i = 0;    i < que.length ;     i++   ){
    document.write(que[i] +  " har könummer " + (i + 1) + "<br>" )
}



// lokalt , kan ej gå ut ur block (kan gå in i block)
let foo= 0;

if(true){   // block
    console.log("loop"+foo);
}

for(   let i = 0;    i < que.length ;     i++   ){ // block
    document.write(que[i] +  " har könummer " + (i + 1) + "<br>" )
}

// kan gå igenom block på alla sätt
var bar= 0;

// Global konstant som aldrig ändras
const PI = 3.14158;


// funktion
// syntax:
// termer


let iceCream = 50;
//camel case
let HotSpot = 99;
//pascal case
const GRILLED_CHEESE = 100;

ida(); // call på funktionen alrik

// definerar/deklarerar en funktion som heter alrik
function ida(){
    let age = 25;
    console.log("ålder:" + age);
    console.log("hej!!!");
}

// parameter är en input
// return / retunera värden är som output
function addition( tal1 , tal2 ){
    return tal1 + tal2;
}

let stuff = addition( 2,2);

console.log( addition( 2,2) )


let age = 18, vip= false; 

function checkClubEntry(age , vipStatus){
    if(vipStatus){
        console.log("welcome!!");
    }else {
        if(age>17)
            console.log("no");
        else
            console.log("yes");
    }
}

checkClubEntry(age,vip);




let foo5 = checkClubEntry;








