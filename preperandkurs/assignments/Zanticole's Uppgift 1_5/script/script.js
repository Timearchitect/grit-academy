const enterBtn = document.querySelector("#enterBtn");

const age = document.querySelector("#age");

const vip = document.querySelector("#vip");

enterBtn.addEventListener("click", function () {
  if (vip.checked) {
    alert("Welcome in, my best VIP customer :)");
  } else if (age.value >= 18) {
    alert("Access granted");
  } else {
    alert("Access denied");
  }
} )