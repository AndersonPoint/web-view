const html = document.querySelector('html')
const player = document.getElementById('player')
const videos = document.querySelectorAll('.videos')


videos.forEach(i => {
  i.addEventListener('click', function() {
    removeClass(player, 'video-off')
    addClass(player, 'video-on')
    html.style.overflowY = 'hidden'
  })
})

player.addEventListener('click', function (e) {
  let ehVideo = e.target.tagName != 'VIDEO'
  if(ehVideo) {
    addClass(player, 'video-off')
    removeClass(player, 'video-on')
    html.style.overflowY = 'scroll'
  }
})

function addClass(element, className) {
  element.classList.add(className)
}
function removeClass(element, className) {
  element.classList.remove(className)
}