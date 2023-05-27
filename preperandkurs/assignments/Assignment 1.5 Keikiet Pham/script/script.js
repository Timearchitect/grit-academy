function handleClick() {
    let age = document.getElementById("ageInput").value;
    let vip = document.getElementById("vipCheckbox").checked;

    parseInt(age)

    if(vip) {
        alert("Welcome in my best VIP customer:)");
        }

    else if(age >= 18 && vip == false) {
        alert("Access granted");
        
    }
    
    else {
    alert("Access denied");

    }
    
}

document.getElementById("enterBtn").addEventListener("click", handleClick);
