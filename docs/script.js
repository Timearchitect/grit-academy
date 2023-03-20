//downloadURI("data:text/html,HelloWorld!", "helloWorld.txt");


function downloadURI() {
    var link = document.createElement("a");  //skapar anchor tagg
    link.download = true; //<-- download="custom-filename.jpg"
    link.target="_blank";
    link.href = "https://gritacademy.se/wp-content/uploads/2021/05/Grit-Academy-logo.png";  //<-- 
    document.body.appendChild(link);   
    link.click();                           //klickar anchor tagg
    document.body.removeChild(link);
    delete link;                            //deletar anchor tagg
  }