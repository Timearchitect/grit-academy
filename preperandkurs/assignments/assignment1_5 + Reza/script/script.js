let vip = false;
let age = 17;

document.getElementById("enterBtn").onclick = function () {
  age = parseInt(document.getElementById("age").value);
  vip = document.getElementById("vip").checked;

  if (age >= 18 || vip) {
    if (vip) {
      alert("Welcome in my best VIP customer:)");
    } else {
      alert("Access granted");
    }
  } else {
    alert("Access denied");
  }
};
