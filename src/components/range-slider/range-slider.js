window.onload = function () {
    slideOne();
    slideTwo();
}

let sliderFirst = document.querySelector('.range__slider-first');
let sliderSecond = document.querySelector('.range__slider-second');
let rangeValueFirst = document.querySelector('.range__value-first');
let rangeValueSecond = document.querySelector('.range__value-second');
let sliderTrack = document.querySelector('.range__track');
let sliderMaxValue = sliderFirst.max;
let minGap = 400;

function slideOne() {
    if (parseInt(sliderSecond.value) - parseInt(sliderFirst.value) <= minGap) {
        sliderFirst.value = parseInt(sliderSecond.value) - minGap;
    }
    rangeValueFirst.textContent = sliderFirst.value + '₽';
    fillColor();
}

function slideTwo() {
    if (parseInt(sliderSecond.value) - parseInt(sliderFirst.value) <= minGap) {
        sliderSecond.value = parseInt(sliderFirst.value) + minGap;
    }
    rangeValueSecond.textContent = sliderSecond.value + '₽';
    fillColor();
}

sliderFirst.addEventListener('input', () => slideOne())
sliderSecond.addEventListener('input', () => slideTwo())
function fillColor(params) {
    percentOne = (sliderFirst.value / sliderMaxValue) * 100;
    percentTwo = (sliderSecond.value / sliderMaxValue) * 100;
    document.querySelector('.track-line').style.background = `linear-gradient(to right, rgba(255, 255, 255, 0) ${percentOne}%, #6fcf97 ${percentOne}%, #66d2ea ${percentTwo}%, rgba(255, 255, 255, 0) ${percentTwo}%)`;
}
