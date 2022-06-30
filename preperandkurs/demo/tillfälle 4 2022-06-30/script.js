// loopar

let array = [888, "hello", true];

// lite avancerad
for (let element of array) {  // of
    console.log(" for each of ",element);
}

for (let element in array) {  // in, inte värdet
    console.log(" for each in ",element);
}

for (let i=0 ; i< array.length; i +=1) {
    console.log(" for",array[i]);
}

// överkurs
array.forEach( (value,key,refArray) => {
    console.log(" array.forEach",refArray);
})


// Functioner

// Definera/Deklarera en alrik funktionen
function alrik(){
    let foo=5;
    console.log(foo);
    alert(foo);
}

// Kalla eller anropa , är att köra funktionen med allt i sig
// alrik();

function addition(tal1,tal2){
    // typeof känner av höger om den vilken datatyp det är, skriver ut i string 
    if(typeof tal1 == "number" && typeof tal2 == "number")
        console.log(tal1 + tal2);
    else
        console.error("Det fattas nummer!!!");
}

function mellanhand(input){
    if(typeof input != "number" )
         console.error("DET ÄR INTE ETT NUMMER"); // avslutar on det inte är number
    input -= 10; // 
    console.log("MOMS avgift")
    return input;
    console.log("HELLO")
}

let count=0;

function infinity(){
    count++;
    if(count > 3) return;
    console.log("infinity",count)
    beyond()

}

function beyond(){
    console.log("beyond",count)
    infinity()
}


