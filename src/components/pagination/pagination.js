export function pagination(totalPages, page) {
    if (document.querySelector('.pagination')) {
        const ulTag = document.querySelector('.pagination__list');
        let liTag = '';
        let activeLi;
        let beforePages = page - 1;
        let afterPages = page + 1;

        if (page > 1) {
            liTag += '<li class="pagination__item pagination__prev"></li>';
        }

        if (page > 2) {
            liTag += '<li class="pagination__item pagination__number">1</li>';
            if (page > 3) {
                liTag += '<li class="pagination__item pagination__dots">...</li>';
            }
        }

        for (let pageLenght = beforePages; pageLenght <= afterPages; pageLenght++) {
            if (pageLenght > totalPages) {
                continue;
            }

            if (pageLenght == 0) {
                pageLenght = pageLenght + 1;
            }

            if (page == pageLenght) {
                activeLi = 'pagination__item--active';
            } else {
                activeLi = '';
            }

            liTag += `<li class="pagination__item pagination__number ${activeLi}">${pageLenght}</li>`;
        }

        if (page < totalPages - 1) {
            if (page < totalPages - 2) {
                liTag += '<li class="pagination__item pagination__dots">...</li>';
            }
            liTag += `<li class="pagination__item pagination__number">${totalPages}</li>`;
        }

        if (page < totalPages) {
            liTag += '<li class="pagination__item pagination__next"></li>';
        }

        ulTag.innerHTML = liTag;


        let activePage = document.getElementsByClassName('pagination__item--active')[0];
        let previousPage = activePage.previousElementSibling;
        let nextPage = activePage.nextElementSibling;
        let previousPageButton = document.querySelector('.pagination__prev');
        let nextPageButton = document.querySelector('.pagination__next');

        if (page < totalPages) {
            nextPageButton.addEventListener('click', () => pagination(totalPages, page + 1));
        }

        if (page > 1) {
            previousPageButton.addEventListener('click', () => pagination(totalPages, page - 1));
        }

        if (page > 2) {
            previousPageButton.nextElementSibling.addEventListener('click', () => pagination(totalPages, 1));
        }

        if (page < totalPages - 1) {
            nextPageButton.previousElementSibling.addEventListener('click', () => pagination(totalPages, totalPages));
        }

        if (page > 1 && page < totalPages + 1) {
            previousPage.addEventListener('click', () => pagination(totalPages, page - 1));
            if (page < totalPages) {
                nextPage.addEventListener('click', () => pagination(totalPages, page + 1));
            }
        } else if (page == 1) {
            nextPageButton.previousElementSibling.previousElementSibling.previousElementSibling.addEventListener('click', () => pagination(totalPages, page + 1));
        }

        if (page == 1) {
            nextPage.insertAdjacentHTML(
                'afterend',
                `<li class="pagination__item pagination__number">${page + 2}</li>`
            );
            nextPage.nextElementSibling.addEventListener('click', () => pagination(totalPages, page + 2));
        } else if (page == totalPages) {
            previousPage.insertAdjacentHTML(
                'beforebegin',
                `<li class="pagination__item pagination__number">${page - 2}</li>`
            );
            previousPage.previousElementSibling.addEventListener('click', () => pagination(totalPages, page - 2));
        }
    }
}