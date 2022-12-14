/*//funktioner
// 


//deklarera
//let foo = [5,100,"hello",true];
//referens
//foo

//definera fuktionen addition
// saker i parantesen är parameterar  
function addition ( tal1 , tal2){
    
    console.log("summan är: "+(tal1 +tal2) );
    return tal1 + tal2; // retunering 
    console.log("funktion!!")

}

while(true){

    console.log("loop")
    break;  //cancel loopar
}

//anropa/kalla addition funktionen
addition()

function infinity(){

    console.log("infnity")
    beyond();
}


function beyond(){

    console.log("beyond")
    infinity();
}


// object

let alrik = 0
alrik= 888

let alrik2 = [ 2 ,"hej",true   ]
alrik2[0] = 888
alrik2[3] = "hejsan" 

let alrik3 = {  helsningFras:"hej", cool:true ,ben:2 }
alrik3.ben=888
alrik3.svar = "hejsan" 

let AlriksConsole={
    helsningFras:"hej",
    log:function (message=""){
        console.log(message)
    }
}

function log(message=""){
    console.log(message)
}


alert() //funktion

console.log() // metod / är en fuktion i ett objekt

let user={
username:"Timearchitect",
password:"123456789",
deleteUser: function(){ this.password=undefined; this.username=undefined; }
}*/

let foo;  foo= "hello";

let bar = 0.5;

//25 = foo;

const alrik = "permanent"