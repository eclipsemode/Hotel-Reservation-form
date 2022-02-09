function slider() {
    if (document.querySelector(".slider")) {
        let value = 1;
        let left = document.querySelector(".slider__arrow--left");
        let right = document.querySelector(".slider__arrow--right");
        let image = document.querySelectorAll(".slider__image");
        let buttons = document.querySelectorAll(".slider__buttons-dots");

        left.addEventListener("click", () => showImage(--value));
        right.addEventListener("click", () => showImage(++value));

        // eslint-disable-next-line no-inner-declarations
        function showImage(e) {
            let i;
            
            if (e > image.length) {
                value = 1;
            }

            if (e < 1) {
                value = image.length;
            }

            for (i = 0; i < image.length; i++) {
                image[i].style.display = "none";
            }
            for (i = 0; i < buttons.length; i++) {
                buttons[i].style.background = "transparent";
            }

            image[value - 1].style.display = "block";
            buttons[value - 1].style.background = "white";
        }

        setInterval(() => showImage(++value), 5000);
    }
}
slider();