function checkboxPress() {
    const checkbox = document.querySelector(".expandable-checkbox-container");
    const checkboxForm = document.querySelector(".expandable-checkbox");
    const checkboxArrow = document.querySelector(".expandable-checkbox-container__icon");
    if (checkbox) {
        checkbox.addEventListener("click", () => {
            checkboxForm.classList.toggle("expandable-checkbox");
            checkboxArrow.classList.toggle("expandable-checkbox-container__icon--disabled");
        });
    }
}

checkboxPress();


