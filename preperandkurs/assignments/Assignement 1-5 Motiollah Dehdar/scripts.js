
function funk1() { 
let age=document.getElementById("txt1").value
let vip=document.getElementById("check1")
if (vip.checked == false && age>= 18) 
    {console.log("Access granted")}
else if ( vip.checked == true) {
    console.log("Välkommen in VIP guest")
alert("Välkommen in VIP guest")
}

else {
console.log("Access denied")
alert("underaged")
}

}


