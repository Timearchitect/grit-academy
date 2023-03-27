let pTagg = document.createElement("p");
pTagg.innerText = "hello";
document.body.appendChild(pTagg);

let foo: number = 5; //explicit deklarerat en variabel
foo = 888;

let bar = "hej"; //inplicit deklarerat en variabel (implyed)
bar = "hejsan";

let array: number[] = [5, 6, 8];
array = [0, 5, 0.5];

/* function */

function addition(tal1: number, tal2: number): number {
    return tal1 + tal2;
}

function printStuff(text: string): void {
    pTagg.innerText = text;
    return;
}

printStuff("hejsan");

console.log(addition(5, 5));
/* objects */
let a = 5; //explicit deklarerat en variabel
let arr = [5, 6, 8];



//type kortar ner typdeklarationen 
 // glöm ej "type"  och  "=" 
type productType = { 
    inventory: number,
    name: string,
    description: string,
    url: string,
}

//Objectet använder productType
let product:productType = {
    inventory: 100,
    name: "Jordan air 2000",
    description: "best shoes of the year 2022 by: Ayub",
    url: "https://....",
};

let realName: string; //explicit typdeklarerat 
realName = "alrik"; 

let obj: { username: string };
obj = { username: "timearchitect" };

let calulator: {
    brand: string;
    addition: (tal1: number, tal2: number) => number;
};


calulator = {
    brand: "casio",
    addition: (tal1, tal2) => {
        return tal1 + tal2;
    },
};

// tuple example som visar att den har ett visst antal i längd & datatyp
// string [] kan ni ha hur mycket element som helst 
let tuple : [ [number,number] ,number,boolean,string, {user:string , password:string }] 
tuple = [ [1,2] ,5,false,"YO", {  user:"alrik" , password:"monkey123" }]

let domObj: HTMLElement | null 
domObj = document.getElementById("test")
nullCheck(domObj)

function nullCheck( obj: HTMLElement | null ):void{
    
    if(obj==null)
    console.error("DU HAR QUARYAT FEL , fixa det!!!");
    else
    obj.innerHTML ="SUCCESS!!!"
    
}

// setting för developers
let t_shirtColor: "red"  | "black" | "white"
t_shirtColor = "red" 

const enum difficultyLevel { easy=0.5,normal=1,hard=2  }
console.log(difficultyLevel.hard);
printStuff(
    difficultyLevel.easy.toString() 
    +"multiplyer on score!" 
    );



//kör funktion i en funktion, callback
function runFunc( f:Function  ){
    f("HEJSAN");
}

console.log("tjenare");

runFunc(console.log)
