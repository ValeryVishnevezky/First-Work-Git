function onBallClick(){
    const ball = document.querySelector('.ball')
    const newSize = ball.offsetWidth + 50
    ball.style.width = ball.style.height = newSize + 'px'
    ball.textContent = newSize
    if (newSize > 400) {
        ball.style.width = ball.style.height = 100 + 'px'
        ball.textContent = '100'
    }
}