let Title = document.getElementById("Maria");
document.addEventListener("mousemove", function(event) {

    if (event.clientX < window.innerWidth / 2) 
        {
        Title.innerHTML = "Maria";
    } 
    else {
        Title.innerHTML = "Rares";
    }
});

let bg = 0;
        Title.onclick = function()
        {
            if(bg%3==0){document.body.style.background = "linear-gradient(to top, rgb(10, 44, 3), rgb(14, 214, 47))";
                        document.body.style.backgroundRepeat = "no-repeat";
                        document.body.style.backgroundAttachment = "fixed";}
            else if(bg%3==1){document.body.style.background = "linear-gradient(to top, rgb(2, 24, 34), rgb(17, 97, 218))";
                        document.body.style.backgroundRepeat = "no-repeat";
                        document.body.style.backgroundAttachment = "fixed";}
            else {if(bg%3==2){document.body.style.background = "linear-gradient(to top, rgb(53, 5, 5), rgb(133, 12, 12))";
                        document.body.style.backgroundRepeat = "no-repeat";
                        document.body.style.backgroundAttachment = "fixed";}};
            bg++;
        }  

document.getElementById("scrolldown").onclick = function(){
    window.scrollTo({
        top:1000,
        Behavior: "smooth",
    });
};

    document.getElementById("yeah").style.visibility = "hidden";

let Yeah = document.getElementById("yeah");
let yh = 0;
let timeout;
document.getElementById("starttext").onclick = function(){
    clearTimeout(timeout);
    yh++;
    if(yh==1) {
        Yeah.innerHTML = "yeah";
        Yeah.style.visibility = "visible";
    }
    else if(yh==2) {
        Yeah.innerHTML = "of course!";
        Yeah.style.visibility = "visible";
    }else if(yh==3) {
        Yeah.innerHTML = "YEAAAH";
        Yeah.style.visibility = "visible";
        yh = 0;
    }
    timeout = setTimeout(function(){Yeah.style.visibility = "hidden";}, 1000)
}
let timeout2;
document.getElementById("case2").onclick = function(){
    clearTimeout(timeout2);
    document.getElementById("bp").style.visibility = "visible"
    timeout2 = setTimeout(function(){document.getElementById("bp").style.visibility = "hidden";}, 1500)
}
