function validateForm() {
          
    let age = document.getElementById("age");
    let vip = document.getElementById("vip");

    
    if (vip.checked) {
      alert("Welcome in my best VIP customer :)");
      return true;
    }

    
    if (age.value >= 18) {
      alert("Access granted");
      return true;
    } else {
      alert("Access denied");
      return true;
    }
  }