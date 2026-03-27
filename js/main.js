'use strict';

function onBallClick() {
    const elBall = document.querySelector('.ball')    
    const ballSize = getRandomInt(20, 61)

    elBall.style.width = `${ballSize}px`
}