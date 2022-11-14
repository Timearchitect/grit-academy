function checkAge() {
    let age = document.getElementById("inputAge").value;
    let vip = document.getElementById("checkbox").checked;

    if (vip) {
        alert("Welcome my best VIP customer :)");
    } else if (age >= 18) {
        alert("Access granted");
    } else {
        alert("Access denied");
    }
}
