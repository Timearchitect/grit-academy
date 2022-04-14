                function isItAlive(){
    let cat = {"Name":"Gustav","Alive":true}
    let dead_alive = Math.floor(Math.random() * 2)
    let returnString = "";
    if (dead_alive == 0 ){
        cat.Alive = true;
    }
    else {
        cat.Alive = false;
    }
    if(cat.Alive == true){
        returnString = "The cats name is " + cat.Name + " and its alive!"
        return alert(returnString)
    }
    if (cat.Alive == false){
        returnString = "the cats name is " + cat.Name + " and its dead!"
        return alert(returnString)
    }
}

