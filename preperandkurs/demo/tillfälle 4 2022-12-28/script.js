"use strict";


// Object


let foo = 5


let hylla = [5, "ystadsgatan 5",true]
hylla[0] = 8
hylla[3] = 0.5
hylla.push(0.5)


let house = { 
    doors: 5,
    adress: "ystadsgatan 5",
    sold: true
   }
house.doors = 8
house.haveRoof= true


let user ={
    logginHistory: ["2022-12-28:15:50","2022-12-28:17:50"],
    password: "12345678",
    username: "Timearchietct",
    loggedIn: true,
    resetPassword:  function  (  oldPassword , newPassword ){
        if("12345678" == oldPassword ) {
            this.password=newPassword
            console.log("Your new password is: "+newPassword)
        }else 
            return alert("wrong password")
       },
    creditcard: { 
        cardnumber: 50125463123241223,
        expiryDate: "01/26",
        cvc: 265
    }
}

 function resetPassword  (  oldPassword , newPassword ){
    if("12345678" == oldPassword ) 
        console.log("Your new password is: "+newPassword)
    else 
        return alert("wrong password")
   }


//alert()   // funktion
//console.log()   // metod



// ctrl  +  alt+ 7 { blockify }


function myFunction(){  


 };



console.log(hylla,house)



let bar = foo

