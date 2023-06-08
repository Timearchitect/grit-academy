function checkClubEntering() {
   // let age = 20;
   // let vip = false;

    let vip = document.getElementsByTagName("input")[0].checked;
    let age = document.getElementsByTagName("input")[1].value;
    age = parseInt(age); //string converterar till heltal
    console.log(age, vip);
    console.log(typeof age, typeof vip);

    if (vip) {
        alert("Welcome in my best VIP customer :)");
        console.log("YES");
    } else {
        // false
        console.log("NO");

        if (age >= 18) {
            alert("Access granted");
            console.log("YES");
        } else {
            alert("Access denied");
            console.log("NO");
        }
    }
}
