
function checkAge(){

let age= document.getElementById("age").value;
let vip= document.getElementById("vip").checked;


    if(vip==true){
        document.getElementById("vip").Checked
        console.log("Welcome in my best VIP costumer :)");
        alert("Welcome in my best VIP costumer :)");
    }
        else if(age >=18){
            document.getElementById("age").value
            console.log("true");
            alert("Access granted");
        }
            else{
                document.getElementById("age").value
                console.log("false");
                alert("Access Denied");
            }
}

