

//button 
/*
const enterBtn = document.getElementById("enterBtn");

enterBtn.addEventListener("click", function(e) {

let age = document.getElementById("numberBox").value;
console.log(age);
*/

function returnNumber() {
    let age = document.getElementById("numberBox").value;
    console.log(age);

    let vip = document.getElementById("checkBox").checked;
    console.log(vip)

   if (vip === true) {
    alert("Welcome in my best VIP customer :)");
} else if (age >= 18) {
    alert("Access granted"); 
}  else {
    alert("Access denied");
};
};