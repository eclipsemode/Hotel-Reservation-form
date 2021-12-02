const labelMale = document.querySelector('[value="male"]').parentElement;
const labelFemale = document.querySelector('[value="female"]').parentElement;

document.addEventListener('click', (event) => {
    if (event.target.closest('[value="male"]')) {
        labelMale.classList.add('--checked');
        if (labelFemale.classList.contains('--checked')) {
            labelFemale.classList.remove('--checked');
        }
    } else if (event.target.closest('[value="female"]')) {
        labelFemale.classList.add('--checked');
        if (labelMale.classList.contains('--checked')) {
            labelMale.classList.remove('--checked');
        }
    }
})