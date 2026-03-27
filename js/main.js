'use strict';

function onBallClick(idx, maxDiameter) {
    const elBall = document.querySelector(`.ball${idx}`)    
    const orgBallSize = parseFloat(window.getComputedStyle(elBall).width)
    const increment = getRandomInt(20, 61)
    
    const ballSize = orgBallSize + increment
    const ballColor = getRandomColor()

    elBall.style.width = (ballSize < maxDiameter) ? `${ballSize}px` : `100px`
    elBall.style.backgroundColor = ballColor
}

function swapBallsColor() {
    const elBall1 = document.querySelector(`.ball1`)
    const ball1Color = window.getComputedStyle(elBall1).backgroundColor
    const elBall2 = document.querySelector(`.ball2`)
    const ball2Color = window.getComputedStyle(elBall2).backgroundColor

    elBall1.style.backgroundColor = ball2Color
    elBall2.style.backgroundColor = ball1Color
}