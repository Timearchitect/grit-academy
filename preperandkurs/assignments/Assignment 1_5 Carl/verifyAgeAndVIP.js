function verifyAgeAndVIP() {
    let age = 0;
    let vip = false;

    age = document.getElementById("age").value;
    vip = document.getElementById('vip').checked;

    if (vip == true) {
        alert("Welcome in my best VIP customer :) ");
    } else if (age >= 18) {
        alert("Access granted ");
    } else {
        alert("Access denied ");
    }
}