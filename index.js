
const counter = document.getElementById("counter")

const decreasebtn = document.getElementById("decrease");
const resetbtn = document.getElementById("reset");
const increasebtn = document.getElementById("increase");

let num = 0;

decreasebtn.onclick = function(){
    num--;
    counter.textContent = num;
}


increasebtn.onclick = function(){
    num++;
    counter.textContent = num;
}

resetbtn.onclick = function(){
    num = 0;
    counter.textContent = num;
}