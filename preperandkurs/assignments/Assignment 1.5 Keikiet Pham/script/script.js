function handleClick() {
    let age = document.getElementById("ageInput").value;
    let vip = document.getElementById("vipCheckbox").checked;

    parseInt(age);
// alt + shfit +f  format document
// ctrl + * komment

    if (vip) {
        alert("Welcome in my best VIP customer:)");
    } else if (age >= 18) {
        alert("Access granted");
    } else {
        alert("Access denied");
    }
}

document.getElementById("enterBtn").addEventListener("click", handleClick);
