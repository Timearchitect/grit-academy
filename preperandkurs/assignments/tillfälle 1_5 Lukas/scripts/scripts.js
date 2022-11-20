function checkAge() {
  let vip = document.getElementById("VIPS").checked;
  console.log(vip);

  let age = document.getElementById("age").value;
  console.log(age);

  if (vip === true) {
    alert("Welcome in my best VIP customer :)");
  } else if (age >= 18) {
    alert("Access granted");
  } else {
    alert("Access denied");
  }
}
