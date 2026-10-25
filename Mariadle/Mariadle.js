console.log(15);
document.getElementById("nrcorect").style.visibility = "hidden"

document.getElementById("submit").onclick = function(){
    let x = Number(document.getElementById("NrZi").value);
    if (!(x >= 1 && x <= 31 && Number.isInteger(x))){
        document.getElementById("nrcorect").style.visibility = "visible"
        setTimeout(function(){document.getElementById("nrcorect").style.visibility = "hidden";}, 1000)
        document.getElementById("NrZi").value = "";
    }
}

let poze = [
    {src: "poze mariadle/2 sept.jpg", zi:2, luna:9},
    {src: "poze mariadle/4 sept.jpg", zi:4, luna:9},
    {src: "poze mariadle/6 sept.jpg", zi:6, luna:9},
    {src: "poze mariadle/6 sept 2.jpg", zi:6, luna:9},
    {src: "poze mariadle/11 sept.jpg", zi:11, luna:9},
    {src: "poze mariadle/11 sept 2.jpg", zi:11, luna:9},
    {src: "poze mariadle/13 sept.jpg", zi:13, luna:9},
    {src: "poze mariadle/13 sept 2.jpg", zi:13, luna:9},
    {src: "poze mariadle/13 sept 3.jpg", zi:13, luna:9},
    {src: "poze mariadle/13 sept 4.jpg", zi:13, luna:9},
    {src: "poze mariadle/13 sept 5.jpg", zi:13, luna:9},
    {src: "poze mariadle/13 sept 6.jpg", zi:13, luna:9},
    {src: "poze mariadle/15 sept.jpg", zi:15, luna:9},
    {src: "poze mariadle/16 sept.jpg", zi:16, luna:9},
    {src: "poze mariadle/16 sept 2.jpg", zi:16, luna:9},
    {src: "poze mariadle/16 sept 3.jpg", zi:16, luna:9},
    {src: "poze mariadle/19 sept.jpg", zi:19, luna:9},
    {src: "poze mariadle/19 sept 2.jpg", zi:19, luna:9},
    {src: "poze mariadle/19 sept 3.jpg", zi:19, luna:9},
    {src: "poze mariadle/11 oct.jpg", zi:11, luna:10},
    {src: "poze mariadle/19 oct.jpg", zi:19, luna:10},
    {src: "poze mariadle/9 apr.jpg", zi:9, luna:4},
    {src: "poze mariadle/9 apr 2.jpg", zi:9, luna:4},
    {src: "poze mariadle/17 apr.jpg", zi:17, luna:4},
    {src: "poze mariadle/19 apr.jpg", zi:19, luna:4},
    {src: "poze mariadle/19 apr 2.jpg", zi:19, luna:4},
    {src: "poze mariadle/22 apr.jpg", zi:22, luna:4},
    {src: "poze mariadle/23 apr.jpg", zi:23, luna:4},
    {src: "poze mariadle/26 apr.jpg", zi:26, luna:4},
    {src: "poze mariadle/23 mai.jpg", zi:23, luna:5},
    {src: "poze mariadle/23 mai 2.jpg", zi:23, luna:5},
    {src: "poze mariadle/23 mai 3.jpg", zi:23, luna:5},
    {src: "poze mariadle/15 iun.jpg", zi:15, luna:6},
    {src: "poze mariadle/21 iun.jpg", zi:21, luna:6},
    {src: "poze mariadle/21 iun 2.jpg", zi:21, luna:6},
    {src: "poze mariadle/22 iun.jpg", zi:22, luna:6},
    {src: "poze mariadle/3 iul.jpg", zi:3, luna:7},
    {src: "poze mariadle/3 iul 2.jpg", zi:3, luna:7},
    {src: "poze mariadle/3 iul 3.jpg", zi:3, luna:7},
    {src: "poze mariadle/7 iul.jpg", zi:7, luna:7},
    {src: "poze mariadle/23 iul.jpg", zi:23, luna:7},
    {src: "poze mariadle/24 iul.jpg", zi:24, luna:7},
    {src: "poze mariadle/27 iul.jpg", zi:27, luna:7},
    {src: "poze mariadle/27 iul.jpg", zi:27, luna:7},
    {src: "poze mariadle/17 aug.jpg", zi:17, luna:8},
    {src: "poze mariadle/25 aug.jpg", zi:25, luna:8},
    {src: "poze mariadle/25 aug 2.jpg", zi:25, luna:8},
    {src: "poze mariadle/27 aug.jpg", zi:27, luna:8},
]
let i = Math.floor(Math.random() * poze.length);
let ziR = poze[i].zi;
let lunaR = poze[i].luna;
let sw = false;
let score=0;

function start(){
i = Math.floor(Math.random() * poze.length);

document.getElementById("poza").src = poze[i].src;
document.getElementById("bootup").style.display = "none";
document.getElementById("bootup").style.animation = "none";
document.getElementById("poza").style.visibility = "visible";

document.getElementById("cand").style.display = "block";
document.getElementById("cand").style.animation = "typing2 3s steps(24) forwards,cursor 0.7s step-end infinite";

ziR = poze[i].zi;
lunaR = poze[i].luna;
sw = true;
}

document.getElementById("bootup").onclick = start;
document.getElementById("continue").onclick = function(){
    document.getElementById("continue").style.display = "none";
    document.getElementById("continue").style.animation = "none";
    start();
}
document.getElementById("submit").onclick = function(){
    if(sw == true){
let x = Number(document.getElementById("NrZi").value);
let T1;
    if (!(x >= 1 && x <= 31 && Number.isInteger(x))){
        clearTimeout(T1);
        document.getElementById("score").style.visibility = "hidden";
        document.getElementById("puncte").style.visibility = "hidden";
        document.getElementById("nrcorect").style.visibility = "visible";
        T1 = setTimeout(function(){
            document.getElementById("nrcorect").style.visibility = "hidden";
            document.getElementById("score").style.visibility = "visible";
            document.getElementById("puncte").style.visibility = "visible";}, 1000);
        document.getElementById("NrZi").value = "";
    }
    else{
let ziANS = Number(document.getElementById("NrZi").value);
let lunaANS = Number(document.getElementById("NrLuna").value);

let zileR
if(lunaR % 2 == 0)zileR = (lunaR-1)*30 + ziR;
else zileR = (lunaR-1)*31 + ziR;
let zileANS
if(lunaANS % 2 == 0)zileANS = (lunaANS-1)*30 + ziANS;
else zileANS = (lunaANS-1)*31 + ziANS;
let diferenta = Math.abs(zileR-zileANS);

if (ziANS == poze[i].zi && lunaANS == poze[i].luna) {
    console.log("Corect!");
    document.getElementById("NrZi").value = "";
    document.getElementById("NrLuna").value = "4";
} else {
    console.log("Mai încearcă!");
    document.getElementById("NrZi").value = "";
    document.getElementById("NrLuna").value = "4";
    console.log("ai gresit cu " + diferenta);
}
document.getElementById("poza").style.visibility = "hidden";
document.getElementById("continue").style.display = "block";
document.getElementById("continue").style.animation = "typing 1s steps(9) forwards,cursor 0.7s step-end infinite";

score = score + 100 - diferenta;
if(lunaR == lunaANS)
    score += 50;
document.getElementById("puncte").innerHTML = score;


let rand = document.createElement("li");
if(diferenta === 0)
rand.textContent = "Ai ghicit corect!";
else
rand.textContent = "Ai greșit cu " + diferenta + " zile";
document.getElementById("logs").appendChild(rand);
sw=false;
}
}};