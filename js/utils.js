'use strict';

function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

function getRandomColor() {
  return '#' + Math.floor(Math.random()*16777215).toString(16).padEnd(6, '0');
}