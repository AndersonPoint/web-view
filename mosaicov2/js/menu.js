let headerContainer = document.querySelector("#header")
let headerMenuItens = document.querySelectorAll('.menu > ul > li > a')



window.addEventListener("scroll", onScrollIndexDesktop)



function onScrollIndexDesktop() {
  if (window.scrollY > 0) {
    headerContainer.classList.add("header-fixed")
    headerContainer.style.top = "0px"
    headerContainer.style.backgroundColor = "#ffffff"
    headerContainer.style.border = "none"
    setColorMenu('#242944')
    
    
    
  } else {
    headerContainer.classList.remove("header-fixed")
    headerContainer.style.top = "30px"
    headerContainer.style.backgroundColor = "#ffffff47"
    headerContainer.style.border = "2px outset #838383;"
    setColorMenu('#ffffff')
  }
}

function setColorMenu(color) {
  headerMenuItens.forEach(i => {
    i.style.color = color
  })
  
}


