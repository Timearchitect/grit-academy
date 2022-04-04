function checkage(){
    var age = document.getElementById("age").value;
    var vip = document.getElementById("vip").checked;

   //console.log (vip)
   
   if (vip == true ){
     alert('Welcome in my best VIP customer :)');
   }
    else if (age >= 18){
        alert('Acces granted')
    }
   else {   
      alert('Acces decline');
   }
   
}
