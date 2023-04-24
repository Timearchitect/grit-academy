// 6) funktioner

alriksFunktion(); //anropa/kalla   call

function alriksFunktion() {
    //definera alriksfunktion
    let foo = 5;
    foo++;
    console.log(foo);
    sala();
}

function sala() {
    console.log("Sala");
    //infinity()
    return "hejsan"
}

// function infinity(){
//     console.log("infinty");
//     sala()
// }


//miniräknare

function addition(foo, bar, tal3) {
    // foo& bar är parametrar
    if(foo == undefined || bar == undefined){
        console.warn("fyll i båda parametrar för addition");
        return // cancel funktionen
    }

    if (typeof foo == "number" && typeof bar == "number") {
        console.log(foo + bar);
        return [ "hej", foo+bar , true ]   
        while ( foo<10){
            console.log(foo)
            foo++;
        }

    } else console.warn("input numbers please!!, try again");
}


// metoder är funktioner i ett objekt

//alert() //funktion
//console.log( ); //metod

// 7) Objekt

//             0        1       2
let array = [  5 ,   "red" ,   true ]
array[0] = 999

let objekt = { 
    sold:true,
    amountOfDoors:5 ,
    color:"red",
}
objekt.amountOfDoors = 999


let user = {
    username:"Timearchitect",
    password:"monkey123",
    email:"alrik.he@gritacademy.se",
    login: function(username,password) { //metod
        if(username=="timearchitect" && password=="timearchitect")
        {
            console.log("LOGIN SUCCESS!!!");
        }
    }

}


function login(username,password) { //funktion
    if(username=="timearchitect" && password=="timearchitect")
    {
        console.log("LOGIN SUCCESS!!!");
    }
}




let AlriksConsole={

    log: function (message) {
        console.log(message);
    }
    
}

const PI = 3.14579;

for(var x = 0 ; x< 5 ; x++)
{
    console.log(x);
}
    console.log(x);

