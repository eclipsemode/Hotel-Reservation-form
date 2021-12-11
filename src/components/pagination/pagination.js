const pagList = document.querySelector('.pagination__list');
const pagListItem = document.querySelectorAll('.pagination__item');
const pagItemActive = document.querySelector('.pagination__item--active');
const pagPrev = document.querySelector('.pagination__prev');
const pagNext = document.querySelector('.pagination__next');
const pagDots = document.querySelectorAll('.pagination__dots');

function pagFunc(totalPages, page) {
    pagListItem.forEach((item) => {
        item.addEventListener('click', event => {
            if (event.target == pagNext || event.target == pagItemActive.nextElementSibling) {
                if (pagItemActive.textContent < totalPages - 2) {
                    pagItemActive.textContent++;
                    pagItemActive.previousElementSibling.textContent++;
                    pagItemActive.nextElementSibling.textContent++;
                    if (pagItemActive.textContent == totalPages - 2) {
                        pagNext.previousElementSibling.textContent = totalPages;
                    }
                }
            } else if (event.target == pagPrev || event.target == pagItemActive.previousElementSibling) {
                if (pagItemActive.textContent > 3) {
                    pagItemActive.textContent--;
                    pagItemActive.previousElementSibling.textContent--;
                    pagItemActive.nextElementSibling.textContent--;
                    if (pagItemActive.textContent == 3) {
                        pagPrev.nextElementSibling.textContent = 1;
                    }
                }
                // else if (pagItemActive.textContent == 3) {
                //     pagPrev.nextElementSibling.nextElementSibling.classList.add('pagination__item--active');
                //     pagPrev.nextElementSibling.nextElementSibling.nextElementSibling.classList.remove('pagination__item--active');
                // }
            }

            if (pagItemActive.textContent > 3) {
                pagPrev.nextElementSibling.textContent = '...';
            }
            if (pagItemActive.textContent < totalPages - 2) {
                pagNext.previousElementSibling.textContent = '...';
            }
        })
    })
}

pagFunc(20, 5)