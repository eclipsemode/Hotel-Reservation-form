export const like = document.querySelectorAll(".like-btn").forEach(element => {
    element.addEventListener("click", () => {
        element.classList.toggle("like-btn--active");
    });
});