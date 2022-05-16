function ageTest()
{
    var age = document.getElementById("age").value; // Åldern skrivs in och värdet tas fån behållaren.
    var vip = document.getElementById("vip").checked; // Information om VIP tas från checkboxen direkt.

    if(age >= 18 && vip == false){ // 18 eller äldre, välkommen.
        alert("Access granted!");
    }
      
    else if(vip == true){ // Är du vip är du en speciell kund.
        alert("Welcome my best customer!");
    }
    else {
        alert("Access denied!"); // Inte vip och under 18.
    }

    
}



