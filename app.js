let barIcon = document.querySelector(".pg1-hidden-bar");
let slideBar = document.querySelector(".pg1-slide-bar");
barIcon.addEventListener("click", function() {
    slideBar.classList.add("pg1-slide-bar-click");
})

let xMark = document.querySelector(".slide-x-mark");
xMark.addEventListener("click", function(){
    slideBar.classList.remove("pg1-slide-bar-click");
})