'use strict';

function onBallClick() {
    const elBall = document.querySelector('.ball')
    const orgBallSize = parseFloat(window.getComputedStyle(elBall).width)
    const increment = 50

    elBall.style.width = `${orgBallSize + increment}px`
}