"use strict"; //strict mode

//6) funktioner

// syntaxen
// parameter utan värde är default undefined
// samma som en variabel
function hejsan(tal1, tal2) {
    // tal1 -= 1 // minskar med 1
    console.log(tal1);
    console.log(tal2);
    console.log(tal1 + tal2); //printar ut saker
    return "alrik"; //retunera
}

// vid use strict (strict mode) så måste man ha let / var / const på varaiabler

let foo = 5; //skapa en variabel
//data = information

function infinity() {
    console.log("infinity");
    beyond();
}

function beyond() {
    console.log("beyond");
    infinity();
}

// man kan tilldela saker som funktioner i variabler
// man ska skriva funktionen den utan ()
let bar = hejsan;
// = tilldelar betyder att den calculerar &kopierar högrasidan till vänstersidan

//alert() // förbyggd funktion
//console.log()  //förbyggd metod

// 7)  Object

// varibel
let x;

x = 5;
x = 8;

//array
let y;
// index   0      1
y =      [5, [true,"Abdulla",123], "alrik", { antal:8 ,name:"Alrik",cool:true }];
y[0] = 8;


//object
let z;
// property  key: value    pair
z = { name: "alrik", antal: 5 };
z.antal = 8;

console.log(x, y, z);
console.log(x);
console.log(y);
console.log(z);

let Console = {
    name:"alrik",
    username:"Timearchitect",
    log: function (...x) {
        console.log(x.join(" "))
    },
}




// alt + shift + f

let user = {
    username: "Timearchitect",
    password: "12345678",
    resetPassword: function(newPass){
        this.password = newPass;
    },
    lastInLogged: 1002546321045,
    age: 31,
    teacher: true,
    array: [1,2,3,"hej",true],
    object: { antal:15, cool:true, name:"Emma"    }
};


