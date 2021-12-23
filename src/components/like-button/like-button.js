const likeBtn = document.querySelectorAll('.like-btn');

likeBtn.forEach(element => {
    element.addEventListener('click', event => {
        element.classList.toggle('like-btn--active');
    })
})