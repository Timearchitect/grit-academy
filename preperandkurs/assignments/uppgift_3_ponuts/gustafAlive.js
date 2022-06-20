function dead_or_alive(){
    var cat = {
        "Name":"Gustav",
        "Alive":true
    }
    
    var dead_alive = Math.floor(Math.random() * 2)
    if(dead_alive == 0){
        return alert("The cats name is " + cat.Name + " and it´s dead, no more lasagne :(")
    }else{
        return alert("the cats name is " + cat.Name + " and it´s alive and will get more lasagne :)")
    }
}
