let age = 17;
let vip = true;

if (vip) {
    alert("Welcome my best VIP costumer!");
    console.log("welcome my best vip costumer!");
} else {
    alert("You are not on the vip list!");
    console.log("You are not on the vip list!");

    if (age >= 18) {
        alert("Access granted");
        console.log("Access granted");
    } else {
        alert("Access denied");
        console.warn("Access denied");
    }
}
