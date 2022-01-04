function checkboxPress() {
    const checkbox = document.querySelector('.expandable-checkbox-container');
    const checkboxForm = document.querySelector('.expandable-checkbox');
    if (checkbox) {
        checkbox.addEventListener('click', () => {
            checkboxForm.classList.toggle('expandable-checkbox--disabled');
            checkbox.classList.toggle('expandable-checkbox-container--disabled');
        })
    }
}

checkboxPress()


