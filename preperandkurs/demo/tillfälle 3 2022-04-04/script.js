 // ==    
 // <
 // >
 // <=
 // >=
 
 //(3) if när det är falskt nästa if sats.
/*if( false ){
    console.log("yes1");
}else {
    console.log("no1");

    if( false ){
        console.log("yes2");
    }else {
        console.log("no2");
    }
}


// Else if -sats : förkortning av 3
if( false )
    console.log("yes1");
else if( false )
    console.log("yes2");
else 
    console.log("no2");
*/

//ternery operator
//let bar = 1==2 ? 5 : 8;

/*

// loopar ,repeterar koder
// while loopar & for loopar


// när condition är true så loopar den
// när den är false så skippar den & går vidare 
let count = 0;
while(count < 3 ){
   // document.write("<img  style='width: 50px; height: 80px;'>");
   count = count + 1;
   console.log("WHILE "+ count);
} 

// DO-WHILE LOOP
count = 0;

do{
    count = count + 1;
    console.log("DO-WHILE "+ count);
}
while(count < 3)


// förkortning på att öka en variabel
count = count - 2 
count += 2
count ++  // ökar bara med 1
count -- // minskar med 1



// for loopen

// ( engångs kod ; condition ; repeterande kod )
// ( deklarera en variabel; condition; öka variabel )
for(let count = 1; count <4 ; count += 1  ){
    console.log("for "+ count);
}



let que = ["Martin","Albin","Austin","George","William","Alrik","Ida"];
que.pop(); // tar bort den sista i elementet arrayn
que.push("Pontus");

for(var i = 0; i <que.length ; i++  ){
    document.write("que position: " + (i+1) +"  "+ que[i] +"<br>" );
}



// scope
let foo = 0; // är lokal i sitt block

var bar = 0; // är lokal i sitt block

const PI=3.1418; // global & konstant


if(true){
// block

}

*/


// Funktion
// Grupperar kod och kan köra det flera gånger;
// syntax
// termer

alrik(" tjenare ", "hej"); // call the function alrik

//  parameter är som en input
function alrik( para1 , para2 ){  // definera/deklarera funktion som heter alrik

    console.log("hej "+para1);
    console.log("hej2 "+para2);
}



// retunera som kan läsas av samt tilldelas.    

function addition( tal1, tal2){
    return tal1+tal2 ;
}

let summan = addition(1,1);


 // recursive

var count=0;

function infinity(){
    if(count > 5) return; 

    console.log("infinity");
    count++;

    beyond();
    
}

function beyond(){
    console.log("beyond");
    infinity();
}





















