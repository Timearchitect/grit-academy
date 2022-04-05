var age = document.getElementById("age");
var vip = document.getElementById("vip");

function checkAge(){
   console.log(age.value);
    if (age.value >= 18 || vip.checked == true){ 
       alert( "welcome!");
       }
    else alert( "Access denied" );
        
}
/*
{
    if (vip.checked == true){ alert = "Welcome in my best VIP customer";
       }
    else (vip.checked == false) ;alert = "Start spending money"
        
    }

*/
   





