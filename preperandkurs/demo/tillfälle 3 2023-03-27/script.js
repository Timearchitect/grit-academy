// Loopar

if (true) {
    //sant


} else {
    //falskt
}

let count = 0;

while (count < 3) {
    console.log("while loop: " + count);
    count++; // ökar count med 1
    
}

// ------------------------------------

count = 0; //reset för do while loopen

do {
    console.log("do loop: " + count);
    count++; // ökar count med 1
} while (count < 3);

//-----------------------------------
//   startkod         condition     förändring

for (let i = 0; i < 3; i++) 
    console.log("for loop: " + i);

let que = ["Pedram", "Elin", "Linnéa", "Aleksander", "Hassan", "Alrik"];
let order = 0;
while (order < 6) {
    document.write(   "<h1>"+que[order] +" har köplats:"+(order+1) +"</h1><br>");
    order++;
}


/* let tries = 3;
let userName = "sdfsdfdsf";
let password = "monkey123";
do {
    if (userName == "darklordxxx" && password == "monkey123")
        alert("Access granted!!");
    else {
        tries--;
        alert("wrong password!!! try again , you have: " + tries + " left");
        prompt("input password");
    }

} while (tries > 0);
alert(
    "you have the no tries left  , your account is blocked , ogt to tech support"
); */


/* functioner */
//alert(888)   //funktionen alert

let tal = 9999;

//                parametrar  
function addition( tal1,tal2 )  {               // definerar en funktion som heter addition
    if(typeof tal1 != "number" || typeof tal2 != "number" ){
        alert("skriv in ett tal , tack!")
        return
    }

    return tal1 + tal2
}



alert( addition(5,5) )                     //anropa / kallar  , call addition 

console.log("OXOXOXOXOX")