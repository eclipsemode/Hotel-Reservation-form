function radioButton() {
  let radio = document.querySelector(".radio");

  if (radio) {
    document.addEventListener("click", () => {
      let sexInput = document.querySelectorAll(".radio-container__label-input");

      sexInput.forEach((element) => {
        if (element.checked) {
          element.parentElement.classList.add(
            "radio-container__label--checked"
          );
        } else {
          element.parentElement.classList.remove(
            "radio-container__label--checked"
          );
        }
      });
    });
  }
}

export { radioButton };
