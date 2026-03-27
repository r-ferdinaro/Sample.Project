'use strict';

function onBallClick(idx) {
    const elBall = document.querySelector(`.ball${idx}`)    
    const ballSize = getRandomInt(20, 61)
    const ballColor = getRandomColor()

    elBall.style.width = `${ballSize}px`
    elBall.style.backgroundColor = ballColor
}