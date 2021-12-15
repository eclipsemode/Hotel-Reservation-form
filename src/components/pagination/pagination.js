const ulTag = document.querySelector(".pagination__list");

let totalPages = 20;
function element(totalPages, page) {
    let liTag = '';
    let activeLi;
    let beforePages = page - 1;
    let afterPages = page + 1;
    if (page > 1) {
        liTag += `<li class="pagination__item pagination__prev"></li>`;
    }

    if (page > 2) {
        liTag += `<li class="pagination__item pagination__number">1</li>`;
        if (page > 3) {
            liTag += `<li class="pagination__item pagination__dots">...</li>`;
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
            activeLi = "pagination__item--active";
        } else {
            activeLi = "";
        }

        liTag += `<li class="pagination__item pagination__number ${activeLi}">${pageLenght}</li>`;
    }

    if (page < totalPages - 1) {
        if (page < totalPages - 2) {
            liTag += `<li class="pagination__item pagination__dots">...</li>`;
        }
        liTag += `<li class="pagination__item pagination__number">${totalPages}</li>`;
    }

    if (page < totalPages) {
        liTag += `<li class="pagination__item pagination__next"></li>`;

    }


    ulTag.innerHTML = liTag;


    if (page < totalPages) {
        document.querySelector('.pagination__next').addEventListener('click', () => {
            element(totalPages, page + 1);
        });
    }
    if (page > 1) {
        document.querySelector('.pagination__prev').addEventListener('click', () => {
            element(totalPages, page - 1);
        });
    }
    if (page > 2) {
        document.querySelector('.pagination__prev').nextElementSibling.addEventListener('click', () => {
            element(totalPages, 1)
        });
    }
    if (page < totalPages - 1) {
        document.querySelector('.pagination__next').previousElementSibling.addEventListener('click', () => {
            element(totalPages, totalPages)
        });
    }
    if (page > 1 && page < totalPages + 1) {
        document.getElementsByClassName('pagination__item--active')[0].previousElementSibling.addEventListener('click', () => {
            element(totalPages, page - 1);
        });
        if (page < totalPages) {
            document.getElementsByClassName('pagination__item--active')[0].nextElementSibling.addEventListener('click', () => {
                element(totalPages, page + 1);
            })
        }
    } else if (page == 1) {
        document.querySelector('.pagination__next').previousElementSibling.previousElementSibling.previousElementSibling.addEventListener('click', () => {
            element(totalPages, page + 1);
        })
    }

    if (page == 1) {
        document.getElementsByClassName('pagination__item--active')[0].nextElementSibling.insertAdjacentHTML(
            `afterend`,
            `<li class="pagination__item pagination__number">${page + 2}</li>`
        );
        document.getElementsByClassName('pagination__item--active')[0].nextElementSibling.nextElementSibling.addEventListener('click', () => {
            element(totalPages, page + 2);
        })
    } else if (page == totalPages) {
        document.getElementsByClassName('pagination__item--active')[0].previousElementSibling.insertAdjacentHTML(
            `beforebegin`,
            `<li class="pagination__item pagination__number">${page - 2}</li>`
        );
        document.getElementsByClassName('pagination__item--active')[0].previousElementSibling.previousElementSibling.addEventListener('click', () => {
            element(totalPages, page - 2);
        })
    }
}

element(totalPages, 1);