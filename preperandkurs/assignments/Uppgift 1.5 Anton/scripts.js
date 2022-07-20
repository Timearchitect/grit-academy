let checkValue = document.getElementById("vip")
let inputValue = document.getElementById("ageinput")


let vip = checkValue
let age = inputValue

if (vip=true) {alert("VIP Welcome");
show_popup("Welcome in my best VIP customer");}

else {
    if (age>=18) {alert("Access granted");
    show_popup("Access granted"); }
    
    else {alert("Access denied");
    show_popup("Access denied");
  }}
