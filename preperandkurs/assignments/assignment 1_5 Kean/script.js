let age = 17

function checkAccess() {
    let vip = document.getElementById("vip").checked;
    let age = parseInt(document.getElementById("age").value);
  
    // if (vip) {
    //   alert("Welcome! You are a VIP customer.");
    // } else {
    //   if (age >= 18) {
    //     alert("Access granted.");
    //   } else {
    //     alert("Access denied.");
    //   }
    // }

    //ctrl + * toogle kommentarer //  

    if (vip) 
      alert("Welcome! You are a VIP customer.");
    else if (age >= 18) 
      alert("Access granted.");
    else 
      alert("Access denied."); 

  }