export function burger() {
    if (document.querySelector(".burger")) {
        let burger = document.querySelector(".burger");
        let menu = document.querySelector(".burger__menu");

        burger.addEventListener("click", () => {
            if (burger.textContent === "menu") {
                burger.textContent = "close";
            } else {
                burger.textContent = "menu";
            }

            menu.classList.toggle("burger__menu--active");
        });

        document.addEventListener("click", event => {
            if (!event.target.closest(".burger__menu") && !event.target.closest(".burger")) {
                if (menu.classList.contains("burger__menu--active")) {
                    menu.classList.remove("burger__menu--active");
                    burger.textContent = "menu";
                }
            }

        });

        window.addEventListener("scroll", () => {
            menu.style.top = window.scrollY + "px";
        });
    }
}