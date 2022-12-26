function validateForm() {
          
    let age = document.getElementById("age");
    let vip = document.getElementById("vip");  // tar data/information från HTML doc

    /*
    if (vip.checked) {
      alert("Welcome in my best VIP customer :)");
      return true;  // avslutar om den är i en function
    }

    
    if (age.value >= 18) {
      alert("Access granted");
      return true;
    } else {
      alert("Access denied");
      return true;
    }
  */
  
    
    if (vip.checked) 
      alert("Welcome in my best VIP customer :)");
    else if (age.value >= 18) 
      alert("Access granted");
    else 
      alert("Access denied");
    

      
  }