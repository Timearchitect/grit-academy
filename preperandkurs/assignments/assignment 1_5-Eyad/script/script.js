function enterClub() {
    let vip = document.getElementById("userVip").checked;
    let age = parseInt( document.getElementById("userAge").value) ;

    if (vip) {
        alert("welcome in My best vip costumer");
    } else if (age >= 18) {
        alert("Access granted!");
    } else {
        alert("Access denied!");
    }
}
