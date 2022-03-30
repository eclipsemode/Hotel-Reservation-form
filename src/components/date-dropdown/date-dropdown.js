// Border and arrow color focus
const dateDropdownBorder = function () {
  if (document.querySelector(".date-form")) {
    let normalBorder = document.querySelector(".date-form__inp--end").style
      .borderColor;
    let focusBorder = "rgba(31, 32, 65, 0.50)";
    let dateContainer = document.querySelectorAll(".date-form__container");
    let firstDate = document.querySelector(".date-form__inp--start");
    let lastDate = document.querySelector(".date-form__inp--end");

    lastDate.addEventListener("focus", () => firstDate.focus());

    firstDate.addEventListener("focus", () => {
      lastDate.style.borderColor = focusBorder;
      dateContainer.forEach((element) =>
        element.classList.add("date-form__container--focus")
      );
    });

    firstDate.addEventListener("blur", () => {
      lastDate.style.borderColor = normalBorder;
      dateContainer.forEach((element) =>
        element.classList.remove("date-form__container--focus")
      );
    });
  }
};

export { dateDropdownBorder };
