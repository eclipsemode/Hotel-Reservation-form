const likeBtn = document.querySelector('.like-btn');

likeBtn.addEventListener('click', event => {
    let value = +likeBtn.innerText;
    likeBtn.classList.toggle('like-btn--active');
})