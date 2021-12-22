const dropdown = document.querySelector('.dropdown');
const dropdownButton = document.querySelector('.dropdown-type');
const babiesSelector = document.querySelector('[name="babies"]');
const childrenSelector = document.querySelector('[name="children"]');
const adultsSelector = document.querySelector('[name="adults"]');
const clearButton = document.querySelector('[name="clear"]');
let gusetNumber;

// CLICK ON BUTTON DROPDOWN. OPEN /  CLOSE DROPDOWN
document.addEventListener('click', (event) => {
    if (event.target.closest('.dropdown-type')) {
        dropdown.classList.toggle('active');
    } else if (!event.target.closest('.dropdown')) {
        dropdown.classList.remove('active');
    } else if (dropdown.classList.contains('active')) {
        dropdownButton.focus();
    }

    if (childrenSelector.value == 0 && adultsSelector.value == 0 && babiesSelector.value == 0) {
        clearButton.style = 'opacity: 0; pointer-events: none;';
    } else {
        clearButton.style = 'opacity: 1; pointer-events: auto;';
        clearButton.setAttribute('style', ':hover {opacity: 0.5;}')
    }
});

// ITEM COUNTER
const buttons = document.querySelectorAll(".counter__btn");

buttons.forEach(btn => {
    btn.addEventListener("click", function (event) {
        const inp = this.parentElement.querySelector(".counter__value");
        const currentValue = +inp.value;
        let newValue;

        if (this.dataset.direction === "plus") {
            newValue = currentValue + 1;
            if (currentValue == 9) {
                currentValue.preventDefault()
            }
        } else {
            newValue = currentValue - 1 > 0 ? currentValue - 1 : 0;
        }

        inp.value = newValue;

        dropdownButton.textContent = +childrenSelector.value + +adultsSelector.value + +babiesSelector.value;

        // Guest declination
        if (dropdownButton.textContent.slice(-1) == 0) {
            dropdownButton.textContent += ' гостей';
        } else if (dropdownButton.textContent.slice(-1) == 1 && dropdownButton.textContent != 11) {
            dropdownButton.textContent += ' гость';
        } else if (dropdownButton.textContent > 4 && dropdownButton.textContent < 20) {
            dropdownButton.textContent += ' гостей';
        } else if (dropdownButton.textContent > 24 && dropdownButton.textContent.slice(-1) > 4 || dropdownButton.textContent.slice(-1) < 0) {
            dropdownButton.textContent += ' гостей';
        } 
        else if (dropdownButton.textContent.slice(-1) > 1 && dropdownButton.textContent.slice(-1) < 5) {
            dropdownButton.textContent += ' гостя';
        }

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
    let dropText = dropdownButton.textContent;
    element.addEventListener('click', (event) => {
        if (event.target.closest('[name="submit"]')) {
            dropdown.classList.remove('active');
            dropdownButton.focus();
        } else if (event.target.closest('[name="clear"]')) {
            dropdownButton.textContent = dropText;
            childrenSelector.value = 0;
            childrenSelector.previousElementSibling.style = 'opacity: 0.5;';
            childrenSelector.nextElementSibling.style = 'opacity: 1;';
            adultsSelector.value = 0;
            adultsSelector.previousElementSibling.style = 'opacity: 0.5;';
            adultsSelector.nextElementSibling.style = 'opacity: 1;';
            babiesSelector.value = 0;
            babiesSelector.previousElementSibling.style = 'opacity: 0.5;';
            babiesSelector.nextElementSibling.style = 'opacity: 1';
        }
    })
});