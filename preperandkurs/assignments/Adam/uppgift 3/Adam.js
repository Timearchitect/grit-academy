function dead_or_alive(){
    var cat = {
      name:"Adam",
      alive:true
    }
    var dead_alive = Math.floor(Math.random() * 2)
     if(dead_alive == 0)
      return alert("The cats name is " + cat.name + " and its dead :(")
    else
      return alert("the cats name is " + cat.name + " and its alive :)")

    }