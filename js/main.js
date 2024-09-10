function onBallClick(){
const ball = document.querySelector('.ball')
const newSize = ball.offsetWidth + 50
ball.style.width = ball.style.height = newSize + 'px'
ball.textContent = newSize
}