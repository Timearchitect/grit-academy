function runHugo() {
    let vip = document.getElementById("customerVIP").checked;
        console.log(vip)

    let age = document.getElementById("customerAge").value;
        let maxMinorage = 17
        let legalAge = 18


    if (vip) {
        document.getElementById("customerVIP").checked
        console.log("VIP logg")
        alert("Welcome in my best VIP customer :)");
    }

    if (age > maxMinorage) {
        document.getElementById("customerAge").value
        alert("access granted")

    } else {
        document.getElementById("customerAge").value
        alert("access denied")
    }

    //console.log(vip)
    //console.log(maxMinorage)
    //console.log(legalAge)

}