'use strict';

function onBallClick() {
    const elBall = document.querySelector('.ball')
    const orgBallSize = parseFloat(window.getComputedStyle(elBall).width)
    const increment = 50
    let ballSize = orgBallSize + increment

    if (ballSize > 400) ballSize = 100

    elBall.style.width = `${ballSize}px`
}