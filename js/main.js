'use strict';

function onBallClick(idx, limit) {
    const elBall = document.querySelector(`.ball${idx}`)    
    const orgBallSize = parseFloat(window.getComputedStyle(elBall).width)
    const increment = getRandomInt(20, 61)
    
    const ballSize = orgBallSize + increment
    const ballColor = getRandomColor()

    elBall.style.width = (ballSize < limit) ? `${ballSize}px` : `100px`
    elBall.style.backgroundColor = ballColor
}