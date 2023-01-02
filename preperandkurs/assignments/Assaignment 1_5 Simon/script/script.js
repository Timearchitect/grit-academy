let age = 17;
let vip = false;

alert("Assignment 1_5");

console.log("Club Exlusive");

function ageClick() {
  age = parseInt(document.getElementById("ageInput").value, 10);
  vip = document.getElementById("vipCheckbox").checked;

  if (vip) {
    console.log("Welcome in my best VIP customer!");
    alert("Access Granted!");
  } else if (age >= 130) {
    console.log("Run! Undead is Here!");
    alert("Undead is here!");
  } else if (age >= 18) {
    console.log("Welcome!");
    alert("Access Granted!");
  } else {
    console.log("you are under age!");
    alert("Access Denied!");
  }
}
