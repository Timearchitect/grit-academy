function check(){


  let checkValue = document.getElementById("vip");
  let inputValue = document.getElementById("ageinput");
  
  let vip = checkValue.checked;
  let age = inputValue.value;
  
  if (vip == true) 
    alert("VIP Welcome");
  else if (age >= 18) 
    alert("Access granted");
  else 
    alert("Access denied");
  

}
