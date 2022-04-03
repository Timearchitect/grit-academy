//Function that will only be used if button is pressed
function AgeVerification(){
    // Selecting the input element and getting its value 
    var age = document.getElementById("ageInput").value; 
var vip=document.getElementById("checkbox");

    // Displaying the value
   
    if(age>=18&& vip.checked==false) { //If above 18 years and VIP

        alert("Access granted"); //If 18 or above
    
    }
    
    else if(age <18 && vip.checked==false) //If value is lower then minimum age of 18
    {
    
        alert("Acces denied"); //If age beneath 18
    
    }
    
    if (vip.checked == true){ //If VIP customer regardless of age
    
        alert("Welcome my best VIP customer :)");
    
    }
    
}
