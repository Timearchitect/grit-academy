// (condition) påstående/regel
//  sant / falskt
//vid sant kör nästa kod
//vid falskt skip nästa kod
/*
let amountOfApples;
amountOfApples = 15;

// == lika    != inte lika med
//   <   mindre än  > större än
//  <=   mindre+lika  >= större+lika

if( false )
    console.log("SANT");
else 
    console.log("FALSE");


// första FALSKT sedan går den vidare
if( false )
    console.log("större än 10");
else if( amountOfApples < 20 )
    console.log("mindre än 20");
else 
    console.log("Nej inte < 20");  


// första SANT sedan går den vidare
if( true )
    if( amountOfApples < 20 )
        console.log("båda är sanna");
else  
    console.log("nej");


let age= 16;
let vip = true;
// && och    || eller


if(  age >= 18   &&  vip == true  )
    console.log("SANT!!!!!!!!");
else 
    console.log("FALSE");




// else kan bara existera under en if()

console.log("vidare...");



// while loop

// (condition) regel/påstående
// vid sant så repeterarden
// vid falskt stoppar den och går vidare
let j = 0;
while(j < 3){
    //document.write("<button>knapp</button>");
    console.log( j + " while loop");
    j = j + 1; 
}

// do while loop  
// (condition) är efter koden som repeteras
// en loop minimun  
let i = 0;
do{
    console.log(i + " do-while loop");
    i = i + 1; 
}
while(i < 3)


// for loop
// (   variabel  ;   condition  ;  ökar  )
for( let i = 0;     i < 3 ;    i += 1  ){
    console.log(i + " for loop");
}



let que = ["Alrik","Petra","Adel","Helen"];

for( let i = 0;     i < 4 ;    i += 1  ){
    let text= 'kö plats '+ i +' : '+ que[i];
    document.write("<div>"+text+"</div>");
}














// funktioner
//alert("hello world");  // kallar funktionen alert med "hello world" some paramenter


//metoder
//console.log("hello world");


// definera funktion

let foo; 
foo = 5;

function addition( para1 , para2 ){
    let bar= 0;
    if( para1<0){
        console.error("value to small!!!");
    }
    return para1 + para2 ;
}



  // kalla på addition()

  foo = addition(25,51);

console.log( foo   );


function infinity(){
    console.log("infinity");
    beyond();
}


function beyond(){
    console.log("beyond");
    infinity();
}







*/
function beyond(){
    console.log("beyond");
    infinity();
}
// Objekt

let foo;
foo = 5;

let foo2;
//      0    1      2
foo2 = [5,"green", true];
foo2[0] = 99999;


let foo3;
//       id      color       ready
foo3 = {
    id:5,
    color:"red",
    ready:false
};

foo3.id= 99999;


//console.log();

let AlriksConsole = {
    log: function(x){ 
        console.log(x); 
    }
};

AlriksConsole.log() // kallar på metoden 


const foo4 = 5; 

for( var i = 0 ; i< 3; i++) {
    console.log(i);
}
i= foo4;
console.log(i);






