'use strict';

function onBallClick(idx) {
    const elBall = document.querySelector(`.ball${idx}`)    
    const orgBallSize = parseFloat(window.getComputedStyle(elBall).width)
    const increment = getRandomInt(20, 61)
    
    const ballSize = orgBallSize + increment
    const ballColor = getRandomColor()

    elBall.style.width = (ballSize < 400) ? `${ballSize}px` : `100px`
    elBall.style.backgroundColor = ballColor
}