// functioner

// skapar en funktion, definera/deklarera
function alrik(x) {
    // parameter/argument
    //x += 1;
    // console.log(x);
    return 55555555;
}

// anropa/kalla funktionen alrik
alrik(888);

function addition(tal1, tal2) {
    if (tal1 != undefined && tal2 != undefined) console.log(tal1 + tal2);
    if (typeof tal1 == "string" || typeof tal2 == "string")
        console.error("texter är inte acceptabelt");
    else console.error("Siffror saknas!!!");
}

function generateRandomNumber() {
    /*let slumpTal = Math.random(); // slump
    slumpTal = slumpTal * 100;      // ökar range 
    slumpTal = Math.round(slumpTal) // avrundning

    return slumpTal;*/

    return Math.round(Math.random() * 100);
    console.log("hello");
}

function infinity() {
    console.log("infinity");
    beyond();
}


function beyond() {
    console.log("beyond");
    infinity();
}



// Object
let foo;
foo= 5;
foo = 888;

let foo2;
// index  0 ,1 ,2 
foo2 = [ 
    5,
    "red",
    true
];

foo2[0]= 888

let car;
 // key : value  , property
car = { 
    passanger:5 ,
    color:"red" ,
    insured: true,
    drive: function (){
        console.log("VRROOOOMM!!")
    }
}

car.passanger = 888


let alriksConsole = {

    log:function (message){
        console.log(message)
    }
}



function log(message){
    console.log(message)
}


let user = {
    username:"Alrik",
    password:"123456789",
    email:"alrik.he@gritacademy.se"
}

//console.log("hello"); // Metod

//alert() // function

