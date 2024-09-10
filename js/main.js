function onBallClick(){
    const ball = document.querySelector('.ball')
    const newSize = ball.offsetWidth + getRandomInt(20, 60)
    ball.style.width = ball.style.height = newSize + 'px'
    ball.textContent = newSize
    ball.style.backgroundColor = getRandomColor()
    if (newSize > 400) {
        ball.style.width = ball.style.height = 100 + 'px'
        ball.textContent = '100'
    }
}