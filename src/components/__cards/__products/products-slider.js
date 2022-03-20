/* eslint-disable no-inner-declarations */
export function productsSlider() {
    if (!document.getElementById('products__list')) {
        return;
    }
    const cards = document.getElementsByClassName('products');
    for (let i = 0; i < cards.length; i++) {
        let card = cards[i];

        let value = 1;
        const right = card.querySelector('.products__nav--right');
        const left = card.querySelector('.products__nav--left');
        let image = card.querySelectorAll('.products__img');
        let buttons = card.querySelectorAll('.products__circle-dots');

        left.addEventListener('click', () => showImage(--value));
        right.addEventListener('click', () => showImage(++value));

        function showImage(e) {
            let i;

            if (e > image.length) {
                value = 1;
            }

            if (e < 1) {
                value = image.length;
            }

            for (i = 0; i < image.length; i++) {
                image[i].style.display = 'none';
            }
            for (i = 0; i < buttons.length; i++) {
                buttons[i].style.background = 'transparent';
            }

            image[value - 1].style.display = 'block';
            buttons[value - 1].style.background = 'white';
        }
    }
}