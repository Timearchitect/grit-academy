function checkID() {
    let age = parseInt(document.getElementById("age").value);
    let vip = document.getElementById("vip").checked;
    //console.log(typeof age);
    if (vip == true) 
        alert("Welcome in my best VIP customer :)");
    else if (age >= 18) 
        alert("Access granted!");
    else 
        alert("Access denied!");
}
