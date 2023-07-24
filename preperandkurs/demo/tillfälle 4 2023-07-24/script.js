// Math object 

Math.random(); // slumparv 0-1  men inte 1
Math.round(0.5); // slumparv 0-1  men inte 1
Math.ceil(0.5);
Math.floor(0.5);
Math.PI;
Math.abs(0.5);

// Date object
Date();
let idag = new Date("2023-07-24 07:11:25"); // customize
let current = new Date(); // just nu från datorns tids
idag.getHours();

// closure
if (true) {
    const alrik = 15;
    console.log(alrik);

    if (true) {
        var foo = 9;
        var foo = 9;
    }
    console.log(foo);
}

// Funktioner

function checkAge(age) {
    if (age >= 18) {
        return 888;
    } else {
        return "hej"; // avslutar och retunerar
    }

    console.log("hejsan");
}

while (true) {
    break;  // avslutar
    console.log("hejsan");
}

// Object
let a = true 
a = false

// index  0      1
let b = [ 
    true ,
    5 ,
    "Alrik"
    ]
b[0] = false 


let c = { 
    cool:true ,
    antal:5 , 
    namn:"Alrik" ,
    age:31 
}

c.cool = false

// properties med      key:value
let AlriksConsole= {  
    name:"alrik",  
    log:function (...x) {
        console.log(x)
    },
    antal:888,    

}

function log(...x) {
    console.log(x)
}


console.log(a)
console.log(b)
console.log(c)




let array = [
    "Timearchitect",
    "123455678",
    "alrik_he@hotmail.com"
]
array[3] = "extra info"

let user = {
    username:"Timearchitect",
    password:"123455678",
    email:"alrik_he@hotmail.com",
    login:function (params) {
        console.log(params);
    }
}
user.extraInfo= "cool guy!!!"

function login(params) {
    console.log(params);
}

console.log(typeof "alrik" )   // kollar efter datatypen



