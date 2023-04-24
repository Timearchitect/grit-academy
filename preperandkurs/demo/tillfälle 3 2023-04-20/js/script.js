//  3)  Datatyper

let x;

x = 5; //number  ,integer heltal
x = 0.5; // number  ,float decimaltal

x = "hej"; // string ,sting  sträng
x = `@`; // string ,char   karaktär

x = true; // boolean (true/false) , boolean boolean

x = undefined;

x = {};

console.log(typeof ("hej" + "hej")); //string
console.log(typeof ("hej" + 2)); //string
console.log(typeof ("hej" + true)); //string

console.log(typeof (1 + 1)); //number
console.log(typeof (1 + true)); //number

console.log(typeof (true + true)); //number

//ctrl + '

// console.log(
//     typeof {
//         name: "alrik",
//         efternamn: "he",
//         age: 18,
//     }
// );

// x= 55

// if(typeof x  == "object"){
//     alert("det är ett object")
// }

// if(typeof x  == "number"){
//     alert("det är ett number")
// }

// if(typeof x  == "string"){
//     alert("det är ett string")
// }

console.clear();

if (1 != 4) {
    console.log("JA");
} else {
    console.log("NEJ");
}

// ( 3) if satser   mer saker

let age = 18;
let vip = true;

if (age >= 18)
    //true
    console.log("sant");
else {
    //false
    console.log("falskt");
}

if (vip) console.log("sant");
else console.log("falskt");

//2)  ifsats om sant nästa if

if (age >= 18) {
    //true
    console.log("sant");

    if (vip) 
        console.log("sant");
    else 
        console.log("falskt");


} else {
    //false
    console.log("falskt");
}


// (3) ifsats om falskt nästa if

if (age >= 18){
    //true
    console.log("sant");
}else {
    //false
    console.log("falskt");

    if (vip) 
        console.log("sant");
    else 
        console.log("falskt");
    
}
    
// förkortning   else if sats

if (age >= 18)
    console.log("sant");
else if (vip) 
    console.log("sant");
else 
    console.log("falskt");
    




// (4) if combinerat samtidigt
// ||  eller or
// &&  and och
console.clear()
vip = false

 if ( age >= 18 || vip == true ) {
    console.log("sant");
}else {
    console.log("falskt");
}



// 5) Loopar  

let count = 0 

while(count < 3){
    console.log("while loop: " +  count);
    count += 1;  
}

//   deklaration     condition   ändrar på variablen
for(  let count = 0;   count < 3;   count += 1  )
    console.log("for loop: " +  count);





let que = [ "Olof","Mimmi","Sala","Alrik","Thomas","Anna","Henrik"]

let i = 0 
while(i < que.length){
    document.write("köplats: " +(i+1) +"   "+  que[i]+ " <br> " );
    i += 1;  
}

var blommor = ["Nejlikrot", "Rudbeckia", "Vallmo" ]
let blomma = "maskros"
console.log(blommor[2] = blomma)