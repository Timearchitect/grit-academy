console.clear(); // rensar konsolen för klutter

/* array */

//index       0       1     2     3
//element/ett index
let array = ["red", "grey", 4, true];
console.log(array);//läsa hela arrayen 
array[0] = "blue";
console.log(array[0]); //läsa en index/element

/* Object */
//key    color :   value "red"
//properties/egenskaper  som css
let car = {
    color: "red",
    background_color: "grey",
    amoutOfWheels: 4,
    registered: true,
    arrayen: array,
    addition: function (tal1, tal2) {
        // lägg in en metod (samma struktur  nyckel: värde)
        console.log(tal1 + tal2);
    },
};
car["color"] = "blue";          // js sätt, lik arrays tilldelning 
car.color = "blue"              // vanlig tilldelning av objektens color egenskap 
console.log(car);               // läsa hela objektet
console.log(car["color"]);      // js sätt att läsa
console.log(car.amoutOfWheels); // läsa egenskap vanligaste i programmering

car.addition();                 // kallar på en metod

function addition(tal1 = 20, tal2 = 20) { //definerar en function addition med 2 parametrar
    console.log(tal1 + tal2);
}

addition();                     // kallar på en vanlig funktion

/* 
alrik("hello world")

function alrik(text){
    alert(text)
    console.log(text)
    document.write(text);
}
 */

let user1 = {                   // praktiskt exempel
    password: "monkey123****",
    username: "timear*******",
    email: "alrik.he@****.se",
};

alert();
console.log();                  // metod är funktion i ett objekt

let AlriksConsole = {
    log: function (x) {
        console.log(x);
    },
};
