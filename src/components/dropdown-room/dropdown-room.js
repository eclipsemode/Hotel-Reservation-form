const buttons = document.querySelectorAll(".dropdown-room__btn");
const inputs = document.querySelectorAll(".dropdown-room__value");
const buttonsSubmit = document.querySelectorAll(".dropdown-room__submit-item");
const main = document.querySelector(".dropdown-room");
const mainType = document.querySelector(".dropdown-room__type");
const bedroom = document.querySelector("[name='bedrooms']");
const bed = document.querySelector("[name='beds']");
const bathroom = document.querySelector("[name='bathrooms']");
const textNormal = mainType.firstChild.textContent;

const dropdownRoom = () => {
  itemCounter();
  inp();
  dropdownOpen();
  out();
  submit();
};

const dropdownOpen = () => {
  document.addEventListener("click", (event) => {
    if (event.target.closest(".dropdown-room__type")) {
      main.classList.toggle("dropdown-room--active");
      out();
    } else if (!event.target.closest(".dropdown-room")) {
      if (main.classList.contains("dropdown-room--active"))
        main.classList.remove("dropdown-room--active");
    }
  });
};

const itemCounter = () => {
  buttons.forEach((btn) => {
    btn.addEventListener("click", function () {
      const inpBtn = this.parentElement.querySelector(".dropdown-room__value");
      const currentValue = +inpBtn.value;
      let newValue;

      if (this.dataset.direction === "plus")
        newValue = currentValue + 1 < 9 ? currentValue + 1 : 9;
      else newValue = currentValue - 1 > 0 ? currentValue - 1 : 0;

      inpBtn.value = newValue;
      inp();
      out();
    });
  });
};

function out() {
  let bedroomsDeclination;
  let bedsDeclination;

  if (bedroom.value === 1) bedroomsDeclination = "спальня";
  else if (bedroom.value > 1 && bedroom.value < 5)
    bedroomsDeclination = "спальни";
  else bedroomsDeclination = "спален";

  if (bed.value === 1) bedsDeclination = "кровать";
  else if (bed.value > 1 && bed.value < 5) bedsDeclination = "кровати";
  else bedsDeclination = "кроватей";

  if (bedroom.value === 0 || bed.value === 0 || bathroom.value === 0)
    mainType.firstChild.textContent = textNormal;
  else if (bedroom.value > 0 || bed.value > 0 || bathroom.value > 0)
    mainType.firstChild.textContent =
      bedroom.value +
      " " +
      bedroomsDeclination +
      ", " +
      bed.value +
      " " +
      bedsDeclination +
      "...";
}

function inp() {
  inputs.forEach((inp) => {
    const prev = inp.previousElementSibling;
    const next = inp.nextElementSibling;
    if (inp.value > 0) prev.style = "opacity: 1;";
    else prev.style = "opacity: 0.5;";

    if (inp.value >= 9) {
      inp.value = 9;
      next.style = "opacity: 0.5;";
    } else next.style = "opacity: 1;";
  });
}

const submit = () => {
  buttonsSubmit.forEach((element) => {
    element.addEventListener("click", (event) => {
      if (
        event.target.closest("[name='submit']") &&
        main.classList.contains("dropdown-room--active")
      )
        main.classList.remove("dropdown-room--active");
      else {
        inputs.forEach((element) => {
          element.value = 0;
          inp();
          mainType.firstChild.textContent = textNormal;
        });
      }
    });
  });
};

export { dropdownRoom };
