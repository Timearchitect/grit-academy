// 7)  Objekt

let foo = 5;
foo = 8;

//index      0  1   2     3
let foo2 = [5, true, "red", "ystadsgatan 8b"];
foo2[0] = 8;

//
const hus = {
    amountOfDoors: 5,
    onSale: true,
    color: "red",
    adress: "ystadsgatan 8b",
    owners: ["Alrik", "Kean", "Carolin", "Raidar"],
    garage: { color: "red", size: "20kvm" },
    sell: function () {
        console.log("SOLD!!!");
    },
};

hus.amountOfDoors = 8;

console.log();
document.write();
hus.sell();

let player = {
    maxHp: 100,
    maxMp: 100,
    posX: -15,
    posY: 159,
    displayName: "LOKI THE TRICKY",
};

console.log(foo);
console.log(foo2);
console.log(hus);



const age = 40;

{
    var x = "NI FÅR KÖPA ALKOHOL!";
    var x = "hej"
    console.log(x);
}

