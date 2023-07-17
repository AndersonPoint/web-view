let headerContainer = document.querySelector("#header")
let logoMenu = document.querySelector(".logo")
let headerMenu = document.querySelector('.menu > ul')
let headerMenuItens = document.querySelectorAll('.menu > ul > li > a')



if(window.innerWidth > 720) {
  window.addEventListener("scroll", onScrollIndexDesktop)
} else {
  scrollMenuOn()
  logoMenu.addEventListener('click', logoOnClick)
}

function onScrollIndexDesktop() {
  window.scrollY > 0 ? scrollMenuOn() : scrollMenuOff()
}

function scrollMenuOn() {
  headerContainer.classList.add("header-fixed")
  headerContainer.style.top = "0px"
  headerContainer.style.backgroundColor = "#ffffff"
  headerContainer.style.border = "none"
  setColorMenu('#242944')
}

function scrollMenuOff() {
  headerContainer.classList.remove("header-fixed")
    headerContainer.style.top = "30px"
    headerContainer.style.backgroundColor = "#ffffff47"
    headerContainer.style.border = "2px outset #838383;"
    setColorMenu('#ffffff')
  }
  
  function setColorMenu(color) {
    headerMenuItens.forEach(i => {
      i.style.color = color
    })
    
  }
  
  

function logoOnClick() {
  headerMenu.classList.toggle('margin-top-menu')
}