// CLICK ON BUTTON DROPDOWN. OPEN /  CLOSE DROPDOWN
document.addEventListener('click', (event) => {
    if (event.target.closest('.dropdown-type')) {
        document.querySelector('.dropdown').classList.toggle('active');
    } else if (!event.target.closest('.dropdown')) {
        document.querySelector('.dropdown').classList.remove('active');
    } else if (document.querySelector('.dropdown').classList.contains('active')) {
        document.querySelector('.dropdown-type').focus();
    }

    if (document.querySelector('[name="children"]').value == 0 && document.querySelector('[name="adults"]').value == 0 && document.querySelector('[name="babies"]').value == 0) {
        document.querySelector('[name="clear"]').style = 'opacity: 0; pointer-events: none;';
    } else {
        document.querySelector('[name="clear"]').style = 'opacity: 1; pointer-events: auto;';
        document.querySelector('[name="clear"]').setAttribute('style', ':hover {opacity: 0.5;}')
    }
});

// ITEM COUNTER

const buttons = document.querySelectorAll(".counter__btn");
const sumArr = [+document.querySelector('[name="adults"]').value, +document.querySelector('[name="children"]').value, +document.querySelector('[name="babies"]').value];

buttons.forEach(btn => {
    btn.addEventListener("click", function (event) {

        const inp = this.parentElement.querySelector(".counter__value");
        const currentValue = +inp.value;
        let newValue;

        if (this.dataset.direction === "plus") {
            newValue = currentValue + 1;
        } else {
            newValue = currentValue - 1 > 0 ? currentValue - 1 : 0;
        }

        inp.value = newValue;

        if (inp.value > 0) {
            inp.previousElementSibling.style = 'opacity: 1;';
        } else {
            inp.previousElementSibling.style = 'opacity: 0.5;';
        }

        if (inp.value >= 9) {
            inp.value = 9;
            inp.nextElementSibling.style = 'opacity: 0.5;';
        } else {
            inp.nextElementSibling.style = 'opacity: 1;';
        }
    });
});

// DROPDOWN BUTTONS CLEAR AND SUBMIT

document.querySelectorAll('.dropdown-guest__list-button').forEach(element => {
    let dropText = document.querySelector('.dropdown-type').textContent;
    element.addEventListener('click', (event) => {
        if (event.target.closest('[name="submit"]')) {
            let countGuest = +document.querySelector('[name="children"]').value + +document.querySelector('[name="adults"]').value + +document.querySelector('[name="babies"]').value;
            document.querySelector('.dropdown-type').textContent = countGuest;
            document.querySelector('.dropdown').classList.remove('active');
            document.querySelector('.dropdown-type').focus();
        } else if (event.target.closest('[name="clear"]')) {
            document.querySelector('.dropdown-type').textContent = dropText;
            document.querySelector('[name="children"]').value = 0;
            document.querySelector('[name="children"]').previousElementSibling.style = 'opacity: 0.5;';
            document.querySelector('[name="children"]').nextElementSibling.style = 'opacity: 1;';
            document.querySelector('[name="adults"]').value = 0;
            document.querySelector('[name="adults"]').previousElementSibling.style = 'opacity: 0.5;';
            document.querySelector('[name="adults"]').nextElementSibling.style = 'opacity: 1;';
            document.querySelector('[name="babies"]').value = 0;
            document.querySelector('[name="babies"]').previousElementSibling.style = 'opacity: 0.5;';
            document.querySelector('[name="babies"]').nextElementSibling.style = 'opacity: 1';
        }

        if (document.querySelector('.dropdown-type').textContent == 0) {
            document.querySelector('.dropdown-type').textContent = dropText;
        } else if (document.querySelector('.dropdown-type').textContent != 11 && document.querySelector('.dropdown-type').textContent.slice(-1) == 1) {
            document.querySelector('.dropdown-type').textContent += ' гость';
        } else if (document.querySelector('.dropdown-type').textContent > 1 && document.querySelector('.dropdown-type').textContent < 5 || document.querySelector('.dropdown-type').textContent > 20 && document.querySelector('.dropdown-type').textContent.slice(-1) < 5) {
            document.querySelector('.dropdown-type').textContent += ' гостя';
        } else if (document.querySelector('.dropdown-type').textContent !== dropText) {
            document.querySelector('.dropdown-type').textContent += ' гостей';
        }
    })
});