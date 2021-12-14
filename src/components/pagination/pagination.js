// const ulTag = document.querySelector(".pagination__list");
// let totalPages = 20;
// function element(totalPages, page) {
//     let liTag = '';
//     let activeLi;
//     let beforePages = page - 1;
//     let afterPages = page + 1;

//     document.addEventListener('click', () => {
//         if (page > 1) {
//             liTag += `<li class="pagination__item pagination__prev"></li>`;
//             element(totalPages, page - 1);
//         }

//         if (page > 2) {
//             liTag += `<li class="pagination__item">1</li>`;
//             element(totalPages, 1);
//             if (page > 3) {
//                 liTag += `<li class="pagination__item">...</li>`;
//             }
//         }

//     })


//     if (page > 1) {
//         liTag += `<li class="pagination__item pagination__prev"></li>`;
//         document.getElementsByClassName('pagination__prev')[0].addEventListener('click', () => {
//             element(totalPages, page - 1);
//         })
//     }

//     if (page > 2) {
//         liTag += `<li class="pagination__item">1</li>`;
//         document.getElementsByClassName('pagination__item')[0].addEventListener('click', () => {
//             element(totalPages, 1);
//         })
//         if (page > 3) {
//             liTag += `<li class="pagination__item">...</li>`;
//         }
//     }

//     for (let pageLenght = beforePages; pageLenght <= afterPages; pageLenght++) {
//         if (pageLenght > totalPages) {
//             continue;
//         }

//         if (pageLenght == 0) {
//             pageLenght = pageLenght + 1;
//         }

//         if (page == pageLenght) {
//             activeLi = "pagination__item--active";
//         } else {
//             activeLi = "";
//         }

//         liTag += `<li class="pagination__item ${activeLi}">${pageLenght}</li>`;
//         document.getElementsByClassName('pagination__item')[0].addEventListener('click', () => {
//             element(totalPages, pageLenght);
//         })
//     }

//     if (page < totalPages - 1) {
//         if (page < totalPages - 2) {
//             liTag += `<li class="pagination__item">...</li>`;
//         }
//         liTag += `<li class="pagination__item" >${totalPages}</li>`;
//     }

//     if (page < totalPages) {
//         liTag += `<li class="pagination__item pagination__next" ></li>`
//     }
//     ulTag.innerHTML = liTag;
// }
// element(totalPages, 5);