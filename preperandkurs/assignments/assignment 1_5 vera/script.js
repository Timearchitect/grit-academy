console.log();
let age = 17;
let vip = true

age = document.getElementsByTagName("input")[0].value
vip = document.getElementsByTagName("input")[1].value

if (vip) alert("Welcome in my best VIP customer :)"){ 
    console.log("YES");

    if (age >= 18) alert("Access granted"){
        console.log("YES");
    } else alert("Access denied"){
        console.log("NO");
    }

} else { // false
    console.log("NO");
}