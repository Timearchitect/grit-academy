function runHugo() {
    let vip = document.getElementById("customerVIP").checked; //drar info tickbox från html
    console.log(vip);

    let age = document.getElementById("customerAge").value; //drar värde från input
    let maxMinorage = 17; // är ovanligare och är i negativ condition
    let legalAge = 18;

    if (vip) {
        // truly variabel
        document.getElementById("customerVIP").checked;
        console.log("VIP logg");
        alert("Welcome in my best VIP customer :)");
    } 
    //  if (age > maxMinorage) {
    else if (age >= legalAge) {
        document.getElementById("customerAge").value;
        alert("access granted");
    } else {
        document.getElementById("customerAge").value;
        alert("access denied");
    }

    //console.log(vip)
    //console.log(maxMinorage)
    //console.log(legalAge)
}
