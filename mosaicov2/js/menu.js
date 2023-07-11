let headerContainer = document.querySelector("#header")
let indexHtml = location.href
let windowWidth = window.innerWidth
const regex = RegExp('index.html')


const regexHtml = /\/([a-zA-Z]{1,})(?:\.html)?$/


if (windowWidth > 1023) {
  resizeDesktop()
  window.addEventListener("resize", resizeMobile)
} else {
  resizeMobile()
  window.addEventListener("resize", resizeMobile)
}

function resizeDesktop() {
  if (!regexHtml.exec(indexHtml)) {
    headerContainer.style.top = "30px"
    window.addEventListener("scroll", onScrollIndexDesktop)

  } else {
    headerContainer.style.top = "30px"
    window.addEventListener("scroll", onScrollOthersDesktop)
  }
}

function onScrollIndexDesktop() {
  if (window.scrollY > 31) {
    headerContainer.classList.add("header-fixed")
    headerContainer.style.top = "0px"
  } else {
    headerContainer.classList.remove("header-fixed")
    headerContainer.style.top = "30px"
  }
}

function onScrollOthersDesktop() {
  if (window.scrollY > 25) {
    headerContainer.classList.add("header-fixed")
    headerContainer.style.top = "0px"
  } else {
    headerContainer.classList.remove("header-fixed")
    headerContainer.style.top = "30px"
  }
}

