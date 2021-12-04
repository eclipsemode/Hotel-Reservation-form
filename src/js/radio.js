const labelMale = document.querySelector('[value="male"]').parentElement;
const labelFemale = document.querySelector('[value="female"]').parentElement;

document.addEventListener('click', (event) => {
    if (event.target.closest('[value="male"]')) {
        labelMale.classList.add('radio-container__label--checked');
        if (labelFemale.classList.contains('radio-container__label--checked')) {
            labelFemale.classList.remove('radio-container__label--checked');
        }
    } else if (event.target.closest('[value="female"]')) {
        labelFemale.classList.add('radio-container__label--checked');
        if (labelMale.classList.contains('radio-container__label--checked')) {
            labelMale.classList.remove('radio-container__label--checked');
        }
    }
})