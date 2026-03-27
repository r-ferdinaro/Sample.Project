'use strict';

function onBallClick() {
    const elBall = document.querySelector('.ball')    
    const ballSize = getRandomInt(20, 61)
    const ballColor = getRandomColor()

    elBall.style.width = `${ballSize}px`
    elBall.style.backgroundColor = ballColor
}