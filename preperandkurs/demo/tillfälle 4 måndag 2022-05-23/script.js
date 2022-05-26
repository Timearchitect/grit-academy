// alert();       function

// console.log();  method
// object    .metod()

function log(message) {
  return message;
}

if (1 == 1) {
}

while (false) {}

//syntax

let foo = 5;

// ARRAY
//        element
let foo2 = [
    888,
    "hello",
    true,
    { namn:"Alrik" , age:30 },
    ["Rebeca","Belula","Oguzcan","Simon","GE"]
];

// OBJECT
//          keyvalue pair (property)
//          key : value
let foo3 = {
    siffra: 888,
    text: "hello",
    boolean: true,
    lista:["Alrik",999,true,"hej"]
    };

function drive() {
  // <------ kalla genom drive();
  console.log("VRROOMM!!!!!");
}
// key är som namn så drive är på vänstersida om kolon
let bil = {
  regnummer: "OMB251",
  color: "red",
  amountOfWheels: 4,
  drive: function () {
    console.log("BBRROOMM!!!!!");
  },
};

let Generator = {
  createHtmlEmoji: function () {
    document.write(`<h1>My First Emoji</h1> <p>&#128512;</p>`);
  },
  createHtmlTitles: function () {
    document.write(`
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <h5>Heading 5</h5>
    <h6>Heading 6</h6>`);
  },
  special: { namn:"alrik" , age:30  }
};


//----------------------- array i en array & object i en object ------------------------

//                     [0]   [1]     [2][0]  [2][1]
 let arrayIEnArray= [  888 , 999 , [ "alrik", "GE" ]  ] // array i en array
//få ut "GE"
arrayIEnArray[2][1];

//                            namn                     extraObject.namn    extraObject.age
let objectIEnObject = {  namn:"Belula" , extraObject:{    namn: "Simon"   ,   age: 26 }     }
//få ut age
objectIEnObject.extraObject.age




