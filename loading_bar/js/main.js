function progress(){
    let progr = document.getElementById("progress");
    let text = document.getElementById("countText");
    let counter = 5;
    let progresss = 25;
    let id = setInterval(function(){
        if(progresss == 500 && counter == 100){
            clearInterval(id)
        }else{
            progresss +=5;
            counter +=1;
            progr.style.width = progresss + "px";
            text.innerHTML = counter + "%";
        }
    },50)
}
progress();
