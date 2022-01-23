function burger() {
    if (document.querySelector('.burger')) {
        let burger = document.querySelector('.burger');
        let menu = document.querySelector('.burger__menu')

        burger.addEventListener('click', () => {
            if (burger.textContent === 'menu') {
                burger.textContent = 'close';
                burger.style.color = '#fff';
            } else {
                burger.textContent = 'menu';
                burger.style.color = '';
            }

            menu.classList.toggle('burger__menu--active')
        });
    }
    
}

burger()