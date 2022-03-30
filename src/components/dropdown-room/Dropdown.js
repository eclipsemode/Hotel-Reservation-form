class Dropdown {
  constructor(options) {
    this.mainActiveClass = options.mainActiveClass;
    this.mainTypeClass = options.mainTypeClass;
    this.mainClass = options.mainClass;
    this.inputsClass = options.inputsClass;
    this.buttons = options.buttons;
    this.inputs = options.inputs;
    this.buttonsSubmit = options.buttonsSubmit;
    this.main = options.main;
    this.mainType = options.mainType;
    this.bedroom = options.bedroom;
    this.bed = options.bed;
    this.bathroom = options.bathroom;
    this.textNormal = options.textNormal;
  }

  dropdownOpen = () => {
    document.addEventListener("click", (event) => {
      if (event.target.closest(this.mainTypeClass)) {
        this.main.classList.toggle(this.mainActiveClass);
        this.out();
        this.submitColor();
      } else if (!event.target.closest(this.mainClass)) {
        if (this.main.classList.contains(this.mainActiveClass))
          this.main.classList.remove(this.mainActiveClass);
      }
    });
  };

  itemCounter = () => {
    this.buttons.forEach((btn) => {
      btn.addEventListener("click", (event) => {
        const inpBtn =
          event.target.parentElement.firstElementChild.nextElementSibling;

        const currentValue = +inpBtn.value;
        let newValue;

        if (event.target.dataset.direction === "plus")
          newValue = currentValue + 1 < "9" ? currentValue + 1 : "9";
        else newValue = currentValue - 1 > "0" ? currentValue - 1 : "0";

        inpBtn.value = newValue;
        this.inp();
        this.out();
        this.submitColor();
      });
    });
  };

  out() {
    document.querySelectorAll(this.mainClass).forEach((element) => {
      if (element === document.querySelector(".dropdown-room")) {
        let bedroomsDeclination;
        let bedsDeclination;

        if (this.bedroom.value === "1") bedroomsDeclination = "спальня";
        else if (this.bedroom.value > "1" && this.bedroom.value < "5")
          bedroomsDeclination = "спальни";
        else bedroomsDeclination = "спален";

        if (this.bed.value === "1") bedsDeclination = "кровать";
        else if (this.bed.value > "1" && this.bed.value < "5")
          bedsDeclination = "кровати";
        else bedsDeclination = "кроватей";

        if (
          this.bedroom.value === "0" &&
          this.bed.value === "0" &&
          this.bathroom.value === "0"
        )
          this.mainType.firstChild.textContent = this.textNormal;
        else if (
          this.bedroom.value > "0" ||
          this.bed.value > "0" ||
          this.bathroom.value > "0"
        )
          this.mainType.firstChild.textContent =
            this.bedroom.value +
            " " +
            bedroomsDeclination +
            ", " +
            this.bed.value +
            " " +
            bedsDeclination +
            "...";
      }
      if (element === document.querySelector(".dropdown")) {
        let val =
          Number(this.bedroom.value) +
          Number(this.bed.value) +
          Number(this.bathroom.value);
        let declination;

        if (val.toString().split("").pop() === "1" && val.toString() !== "11")
          declination = "гость";
        else if (
          val.toString().split("").pop() === "2" ||
          val.toString().split("").pop() === "3" ||
          val.toString().split("").pop() === "4"
        )
          declination = "гостя";
        else declination = "гостей";
        if (
          val.toString() === "12" ||
          val.toString() === "13" ||
          val.toString() === "14"
        )
          declination = "гостей";

        if (
          this.bedroom.value === "0" &&
          this.bed.value === "0" &&
          this.bathroom.value === "0"
        )
          this.mainType.firstChild.textContent = this.textNormal;
        else this.mainType.firstChild.textContent = val + " " + declination;
      }
    });
  }

  inp() {
    this.inputs.forEach((inp) => {
      const prev = inp.previousElementSibling;
      const next = inp.nextElementSibling;
      if (inp.value > "0") prev.style = "opacity: 1;";
      else prev.style = "opacity: 0.5;";

      if (inp.value >= "9") {
        inp.value = "9";
        next.style = "opacity: 0.5;";
      } else next.style = "opacity: 1;";
    });
  }

  submit = () => {
    this.buttonsSubmit.forEach((element) => {
      element.addEventListener("click", (event) => {
        if (
          event.target.closest("[name='submit']") &&
          this.main.classList.contains(this.mainActiveClass)
        )
          this.main.classList.remove(this.mainActiveClass);
        else {
          this.inputs.forEach((element) => {
            element.value = 0;
            this.inp();
            this.submitColor();
            this.mainType.firstChild.textContent = this.textNormal;
          });
        }
      });
    });
  };
  submitColor() {
    if (
      this.bedroom.value === "0" &&
      this.bed.value === "0" &&
      this.bathroom.value === "0"
    )
      this.buttonsSubmit[0].style = "opacity: 0; pointer-events: none;";
    else if (
      this.bedroom.value > "0" ||
      this.bed.value > "0" ||
      this.bathroom.value > "0"
    ) {
      this.buttonsSubmit[0].style = "opacity: 1; pointer-events: normal;";
      this.buttonsSubmit[0].setAttribute("style", ":hover {opacity: 0.5;}");
    }
  }
}

export { Dropdown };
