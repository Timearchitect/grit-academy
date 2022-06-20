
function enter(){
    let vip = document.getElementById("vip").checked;
    let age = document.getElementById("age").value;
    console.log(vip)
    if ( vip == true ){
        window.alert("Welcome in my best VIP customer :)");
    }
    else{
        window.alert(age > 17 ? "Access granted" : "Access denied") 
    }
}