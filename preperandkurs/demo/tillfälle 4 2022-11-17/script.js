// funktioner

//deklarering  : skapar varibel
let foo = 5;

//defineringen  : skapar en  funktion
// tal 1 är en parameter beter sig som en variabel
function addition(tal1, tal2) {
    let c = "88";
    alert("Summan är:  " + (tal1 + tal2));
    console.log("hejsan " + c);
}

//anropa/kalla funktionen addition
//addition(5,5)

function test() {
    return 8888; // retunera , cancel funktionen
    console.log("körs ej");
}

// Objekt

let alrik = 8;
alrik = "etc";

//array behåller altid ordningnen baserat på index nummret
let alrik2 = [30, "hej", true];
alrik2[0] = "etc";
alrik2[3] = "etc";

// object har sorterat bostavsordning
let user1 = { age: 30, catchPhrase: "hej", cool: true };
user1.age = " etc";
//alrik3["age"]=" etc"
user1.password = "1234567890";

let AlriksMath = {
    PI: 3.141592653589793,
    floor: "underconstruction---",
};

let AlriksConsole = {
    log: function (input) {
        console.log(input);
    },
};

function log(input) {
    console.log(input);
}
let user = {
    password: "1234567",
    username: "Anneli",
    deleteUser: function () {
        this.password = "";
        this.username = "";
    },
};
let user2 = {
    password: "1234567",
    username: "Lukas",
    deleteUser: function () {
        this.password = "";
        this.username = "";
    },
};
let user3 = {
    password: "1234567",
    username: "cecilia",
    deleteUser: function () {
        this.password = "";
        this.username = "";
    },
};

let allUsers= [ user,user2,user3]

for( let element of allUsers)
    console.log(element.username)
//alert() funktion

//console.log() metod  / funktion i ett object
