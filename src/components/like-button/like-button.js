export const like = document.querySelectorAll('.like-btn').forEach(element => {
    element.addEventListener('click', () => {
        element.classList.toggle('like-btn--active');
        element.querySelectorAll('.like-btn__value').forEach(value => {
            if (element.classList.contains('like-btn--active')) {
                value.textContent++;
            } else if (!element.classList.contains('like-btn--active')) {
                value.textContent--;
            }
        });
    });
});