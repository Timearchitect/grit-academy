let vip = true;
let age = document.getElementById("userAge");


if (vip == true) {
    alert("welcome in My best vip costumer")
} else{
    if (age >= 18) {
        alert("Access granted!")
    }else{
        alert("Access denied!")
    }
}