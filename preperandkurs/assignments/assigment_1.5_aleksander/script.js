
//let age = 17
function returnText() {
    let x = document.getElementById("cbox").checked
    let input = parseInt(document.getElementsByTagName("input")[0].value)

    //document.getElementById("vip").innerHTML = x;
    console.log(input)
    let vip = x;

    if (vip == true) {
        alert("Welcome in my best customer! :)");
    } else if (input >= 18) {
        alert("Access granted");
    } else {
        alert("Acess denied");
    }
    
}



let input = document.getElementById("enterBtn")
input.addEventlistener( "onclick", ()=>{


})


let x = document.getElementById("cbox").value("mittvalue");
document.getElementById("vip").innerHTML = x;

if (vip == true) {
    alert("Welcome in my best customer! :)");
} else if (input >= 18) {
    alert("Access granted");
} else {
    alert("Acess denied");
}

if (input >= 18 == true) {
}
