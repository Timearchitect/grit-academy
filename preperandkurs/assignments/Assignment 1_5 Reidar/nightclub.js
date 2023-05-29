let vip = false;
let age = 0;

const inputAge = document.getElementById("inputAge");
const checkboxVip = document.getElementById("checkboxVip");

inputAge.addEventListener("input", function() {
    age = parseInt(inputAge.value);
});

checkboxVip.addEventListener("change", function() {
    vip = checkboxVip.checked;
});

document.getElementById("enterBtn").addEventListener("click", function() {
    if (vip === true) {
        window.location.href = "vip-page-lp.html";
    } else if (age >= 18) {
        window.location.href = "access-granted-lp.html";
    } else {
        window.location.href = "access-denied-lp.html";
    }
});
