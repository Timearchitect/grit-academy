// Object

let foo;
foo = 5;
foo = 888;

let foo2;
// index  0  , 1 ,  2
foo2 = ["red", 5, true];
foo2[1] = 888;

let foo3;
//  (property )  key : value
foo3 = { sold: true, color: "red", amountOfDoors: 5 };
foo3.amountOfDoors = 888;

//funktion
//alert();

//metod = funktion i ett object
//console.log(   );

function log(input) {
    console.log(input);
}

let Console = {
    namn: "Alrik",
    log: function (input) {
        console.log(input);
    },
};

let user = {
    fullName: "Alrik He",
    email: "alrik_he@hotmail.com",
    password: "123456789",
    loginStatus: true,
    logOut: function () {
        this.logginStatus = false;
        document.getElementById("loginStatus").innerText = "OFFLINE";

        alert(this.fullName + " is logged out!!!");
    },
    logIn: function () {
        if (email == inputemail && password == passwordInput) {
            this.logginStatus = true;
            document.getElementById("loginStatus").innerText = "ONLINE";
            alert(this.fullName + " is logged in!!!");
        } else alert("wrong credentials!!! try again");
    },
};


function charRemove( char, text){
    
    console.log("ex");
}