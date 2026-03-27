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
    const elBall2 = document.querySelector(`.ball2`)
    const ball1Color = window.getComputedStyle(elBall1).backgroundColor
    const ball2Color = window.getComputedStyle(elBall2).backgroundColor

    elBall1.style.backgroundColor = ball2Color
    elBall2.style.backgroundColor = ball1Color
}

function randomBallReduce() {
    const elBall1 = document.querySelector(`.ball1`)
    const elBall2 = document.querySelector(`.ball2`)
    const orgBall1Size = parseFloat(window.getComputedStyle(elBall1).width)
    const orgBall2Size = parseFloat(window.getComputedStyle(elBall2).width)
    
    const reduceVal = getRandomInt(20, 61)
    let ball1Size = orgBall1Size - reduceVal
    let ball2Size = orgBall2Size - reduceVal

    elBall1.style.width = (ball1Size > 100) ? `${ball1Size}px` : `100px`
    elBall2.style.width = (ball1Size > 100) ? `${ball1Size}px` : `100px`
}

function changeBGColor() {
    const elBody = document.querySelector('body')
    
    elBody.style.backgroundColor = getRandomColor()
}