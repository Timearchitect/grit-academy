// Object



//deklarera en variabel
let foo = 5;
foo= 888;

// deklarera en array
//index        0 , 1 ,2 ,3
let foo2 = [        5      ,         "ystadsvägen 5"   ,      true  ]
foo2[0] = 888;

// deklarera ett objekt
// property   key:value pair 
let hus = { amountOfDoors:5 , address:"ystadsvägen 5"   , sold:true   }
hus.amountOfDoors = 888;




//funktion
alert();

//metod = funktion i ett object
console.log();


//Alriks custommade function, copy of console.log()
function log(tal1,tal2){
    console.log(tal1+tal2);
}


let Console = {
    author:"Alrik He" , 
    log: function (tal1,tal2){
        console.log(tal1+tal2);
    }
}


// Scope och block

    let anton = 555;  // deklareras unikt i block, kan inte nås utanför block {}

    var alrik = 555; // deklareras i block, kan nås utanför block {}

    const NERMIN = 555; // deklareras unikt i block, kan inte nås utanför block {} kan ej tilldelas igen

for(var i =0 ; i < 5 ; i++){
    console.log(i)    
}

console.log(i)    





