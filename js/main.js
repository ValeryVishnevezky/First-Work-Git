function onBallClickIncrease(ball, maxDiameter){
    const newSize = ball.offsetWidth + getRandomInt(20, 60)
    ball.style.width = ball.style.height = newSize + 'px'
    ball.textContent = newSize
    ball.style.backgroundColor = getRandomColor()
    if (newSize > maxDiameter) {
        ball.style.width = ball.style.height = 100 + 'px'
        ball.textContent = '100'
    }
}

function onBallClickIncreaseFirstTwo() {
    const ball1 = document.querySelector('.ball1')
    const ball2 = document.querySelector('.ball2')
    onBallClickIncrease(ball1, 200)
    onBallClickIncrease(ball2, 200)
}

function onBallClickReduce(ball, minDiameter){
    const newSize = ball.offsetWidth - getRandomInt(20, 60)
    ball.style.width = ball.style.height = newSize + 'px'
    ball.textContent = newSize
    ball.style.backgroundColor = getRandomColor()
    if (newSize < minDiameter) {
        ball.style.width = ball.style.height = 100 + 'px'
        ball.textContent = '100'
    }
}

function onBallClickReduceFirstTwo() {
    const ball1 = document.querySelector('.ball1')
    const ball2 = document.querySelector('.ball2')
    onBallClickReduce(ball1, 100)
    onBallClickReduce(ball2, 100)
}