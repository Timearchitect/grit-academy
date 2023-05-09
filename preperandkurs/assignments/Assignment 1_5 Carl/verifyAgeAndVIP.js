function verifyAgeAndVIP() {
   /*  let age = 0;
    let vip = false; */

   let age = parseInt(document.getElementById("age").value);
   let vip = Boolean(document.getElementById('vip').checked);
    console.log(age,vip);
    console.log(document.getElementById('vip'));

    if ( vip ) 
        alert("Welcome in my best VIP customer :) ");
    else if (age >= 18) 
        alert("Access granted ");
    else 
        alert("Access denied ");
    
}