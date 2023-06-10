// Variables 

const navBtn = document.querySelector(".mob-navbar-btn")
const header = document.querySelector(".header")
const menuBar = document.querySelectorAll(".nav")
const email = document.getElementById("email")

const activeMenu = ()=>{
    if(header.classList.contains("active")){
        header.classList.remove("active")
    }
}

const toggleMenu = ()=>{
    header.classList.toggle("active")
}

navBtn.addEventListener("click", ()=>toggleMenu() )

for(i=0; i<menuBar.length; i++){
    menuBar[i].addEventListener("click", ()=>activeMenu())
}

