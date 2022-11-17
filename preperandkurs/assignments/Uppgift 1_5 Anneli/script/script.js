function check() {
    let age = document.getElementById("inputAge").value;
    console.log(age);
    let vip = document.getElementById("checkbox").checked;
    console.log(vip);

    if (vip) {
        alert("Welcome my best VIP customer :)");
    }   
    else if  (age >=18) {
        alert("Access granted");
    }
    else {
        alert("Access denied");
    }
}
