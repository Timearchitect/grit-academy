function checkID() {
    let age = parseInt(document.getElementById("age").value);
    let vip = document.getElementById("vip").checked;
    console.log(age);
    console.log(vip);

    if (vip)
        alert("welcome in my best VIP customer :)");
    else if (age >= 18) 
        alert("access granted!");
    else 
        alert("Access denide!");
}
