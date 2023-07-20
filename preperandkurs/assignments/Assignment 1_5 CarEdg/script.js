//Part one
let years = 17;
let premium = false;

if (years >= 18) {
  alert("Access granted");
} else if (premium == true) {
  console.log("Welcome my best VIP customer");
} else {
  console.log("Access denied");
}

//Part two
function enter() {
  let age = parseFloat(document.querySelector("#ageId2").value);
  let vipId = document.getElementById("vipId2").checked;
  if (vipId == true) {
    alert("Welcome my best VIP customer!");
  } else if (age >= 18) {
    alert("Access Granted");
  } else {
    alert("Access Denied");
  }
}