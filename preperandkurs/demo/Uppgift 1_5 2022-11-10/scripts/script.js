alert("Welcome to Moriska Paviljongen. Get ready to party!")


function customerCanEnter(){
    let vip = document.getElementById("box").checked;



    let age = document.getElementById("age").value;


    if (vip){
        alert("Welcome in my best vip customer")
    } else if(Number(age) >= 18)  {
        alert("Access granted");
    }
    else {
        alert("Access denied");
    }
}


