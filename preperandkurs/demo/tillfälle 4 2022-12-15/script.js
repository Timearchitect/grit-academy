// funktioner
//let foo =0;  // deklarera

function alrik( ) {  // definera en funktion som hetrer alrik
    foo +=1
    console.log(foo)
    let bar = "tjenare"
    console.log(bar)
}

alrik() // kalla/anropa funktionen alrik 





let bar = 5;

function addition( tal1 , tal2 ){ //tal1 & tal2 är parameter
    if(typeof tal1 == "number" && typeof tal2 == "number" ) 
     {   
        tal1 = 5
        tal2 = 5
        console.log(tal1 + tal2)
    } else
        console.error("Input only numbers!!!!")

}




function subtraktion( tal1 , tal2 ){
    console.log(tal1 - tal2)
}


function multiplikation( tal1 , tal2 ){
    console.log(tal1 * tal2)
}

function divition( tal1 , tal2 ){
    console.log(tal1 / tal2)
}

function clubGuardChecker( age, vip  ){
    
    if(vip==true)
        return "Welcome VIP person :)!!!"
    else if(age >= 18)
        return "you enter the club"
    else
        return "you are too young...you cant go in "
    

}

function infinity(){
    console.log("infinity")
}


function beyond(){
    console.log("beyond")
    infinity()
}




// object

let x
x = 5



let x2
// index
// element
x2 = [     5    ,    true     ,    "hej"     ]
x2[2] = "tjenare"


let person
// attribut 
person = { 
    fingrar:5 ,
    levande:true ,
    helsning:"hej" ,
    age:30 
}
person.helsning = "HELLO!!!"
person.fingrar = [ "lillfinger","ringfinger","longfinger","indexfinger","tummen" ]


// egen version av console.log()

let y = []

let Console = {
    age:30,
    array: [true,555,"hej"]
}






/*
1)  1*1  ,multiplikation tal vad av alternativen är korrekt?

A [X] detta svaret är 88    : FEL
B [X] detta är divition      : FEL 
C [ ] svaret är siffran 2      : FEL
D [X] svaret är ett decimaltal : FEL

totalt: 0 poäng

2)  Mitt namn är Alrik He, vilka av påståenden är korrekta?

A [X] förnamnet är ALrik   : RÄTT
B [X] Namnet har flera konsonanter :  RÄTT
C [ ] personen har ett mellannamn     : RÄTT
D [X] efternamnet är He : RÄTT


*/