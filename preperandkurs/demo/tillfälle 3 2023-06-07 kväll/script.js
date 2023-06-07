// 4)   if satser
// syntax det parentess ( condition regel )
// == jämnföra
// === jämnföra + datatypen
// < mindre än
// > större än
// <= mindre än eller lika med
// >= större än eller lika med

let age = 20;
age = document.getElementsByTagName("input")[0].value 
let vip = true;

document.write("HELLO")

//1) efter varandra

if (age >= 18) {
    console.log("du är vuxen, du får komma in");
} else {
    console.log("du är ett barn, du får inte komma in");
}

if (vip == true) {
    console.log("du är en kändis");
} else {
    console.log("du är en vanlig människa");
}

//2) om sant ta nästa if sats

if (age >= 18) {
    console.log("du är vuxen, du får komma in");
    if (vip == true) {
        console.log("du är en kändis");
    } else {
        console.log("du är en vanlig människa");
    }
} else {
    console.log("du är ett barn, du får inte komma in");
}


//3) om falskt ta nästa if sats

if (age >= 18) {
    console.log("du är vuxen, du får komma in");
} else {
    console.log("du är ett barn, du får inte komma in");

    if (vip == true) {
        console.log("du är en kändis");
    } else {
        console.log("du är en vanlig människa");
    }

}
 // förenkling

if (age >= 18) 
    console.log("du är vuxen, du får komma in");
else if (vip == true) 
    console.log("du är en kändis");
else 
    console.log("du är en vanlig människa");



// 4 ) flera conditions tillsammans
// && och 
// || eller       

if (age >= 18 && vip == true) {
    console.log("JA");
} else {
    console.log("NEJ");
}



