function checkAge() {


    let age = document.getElementById("Age").value;
    let vip = document.getElementById("Vip").checked;

    if (vip) {
        alert("Welcome my best VIP customer! :)");
    }   
    else if  (age >=18) {
        alert("Access granted!");
    }
    else {
        alert("Access denied!");
    }
}