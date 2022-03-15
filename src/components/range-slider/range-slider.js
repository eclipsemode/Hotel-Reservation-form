/* eslint-disable no-undef */
/* eslint-disable no-inner-declarations */
export function slider() {
    if (document.querySelector('.range')) {

        let sliderFirst = document.querySelector('.range__slider-first');
        let sliderSecond = document.querySelector('.range__slider-second');
        let rangeValueFirst = document.querySelector('.range__value-first');
        let rangeValueSecond = document.querySelector('.range__value-second');
        let sliderTrackLine = document.querySelector('.track-line');
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

        sliderFirst.addEventListener('input', () => slideOne());
        sliderSecond.addEventListener('input', () => slideTwo());

        function fillColor() {
            let percentOne = (sliderFirst.value / sliderMaxValue) * 100;
            let percentTwo = (sliderSecond.value / sliderMaxValue) * 100;
            sliderTrackLine.style.background = `linear-gradient(to right, rgba(255, 255, 255, 0) ${percentOne}%, #6fcf97 ${percentOne}%, #66d2ea ${percentTwo}%, rgba(255, 255, 255, 0) ${percentTwo}%)`;
        }
    }
}