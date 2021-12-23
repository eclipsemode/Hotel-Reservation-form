const dropdown = document.querySelector('.dropdown');
const dropdownRoom = document.querySelector('.dropdown-room');
const dropdownButton = document.querySelector('.dropdown-type');
const babiesSelector = document.querySelector('[name="babies"]');
const childrenSelector = document.querySelector('[name="children"]');
const adultsSelector = document.querySelector('[name="adults"]');
const bedroomsSelector = document.querySelector('[name="bedrooms"]');
const bedsSelector = document.querySelector('[name="beds"]');
const bathroomsSelector = document.querySelector('[name="bathrooms"]');
const clearButton = document.querySelector('[name="clear"]');

// CLICK ON BUTTON DROPDOWN. OPEN /  CLOSE DROPDOWN
document.addEventListener('click', (event) => {
    if (event.target.closest('.dropdown-type')) {
        event.target.parentElement.classList.toggle('active');
    } else if (!event.target.closest('.dropdown') && !event.target.closest('.dropdown-room')) {
        if (dropdown.classList.contains('active')) {
            dropdown.classList.remove('active');
        } else if (dropdownRoom.classList.contains('active')) {
            dropdownRoom.classList.remove('active');
        }
        
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
const counterValue = document.querySelectorAll(".counter__value");

buttons.forEach(btn => {
    btn.addEventListener("click", function (event) {
        const inp = this.parentElement.querySelector(".counter__value");
        const currentValue = +inp.value;
        let newValue;
        let textButton = event.target.parentElement.parentElement.parentElement.parentElement.previousElementSibling;

        if (this.dataset.direction === "plus") {
            newValue = currentValue + 1;
            if (currentValue == 9) {
                currentValue.preventDefault()
            }
        } else {
            newValue = currentValue - 1 > 0 ? currentValue - 1 : 0;
        }

        inp.value = newValue;
        textButton.value = newValue;



        // Room declination
        let bedroomsDeclination;
        let bedsDeclination;
        let bathroomsDeclination;
        if (document.querySelector('[name="bedrooms"]').value == 1) {
            bedroomsDeclination = 'спальня';
        } else if (document.querySelector('[name="bedrooms"]').value > 1 && document.querySelector('[name="bedrooms"]').value < 5) { 
            bedroomsDeclination = 'спальни';
        } else {
            bedroomsDeclination = 'спален';
        }
        if (document.querySelector('[name="beds"]').value == 1) {
            bedsDeclination = 'кровать';
        } else if (document.querySelector('[name="beds"]').value > 1 && document.querySelector('[name="beds"]').value < 5) {
            bedsDeclination = 'кровати';
        } else {
            bedsDeclination = 'кроватей';
        }

        // Value of dropdown element
        if (event.target.closest('.dropdown')) {
            textButton.textContent = +childrenSelector.value + +adultsSelector.value + +babiesSelector.value;
        } 
        if (event.target.closest('.dropdown-room')) {
            textButton.textContent = document.querySelector('[name="bedrooms"]').value + ' ' + bedroomsDeclination + ', ' + document.querySelector('[name="beds"]').value + ' ' + bedsDeclination + '...';
        }



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

        // Color of active or nonactive button in item counter
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
    element.addEventListener('click', (event) => {
        if (event.target.closest('[name="submit"]')) {
            event.target.parentElement.parentElement.parentElement.parentElement.classList.remove('active');
            event.target.parentElement.parentElement.parentElement.previousElementSibling.focus();
        } else if (event.target.closest('[name="clear"]')) {
            if (event.target.parentElement.parentElement.parentElement.parentElement.classList.contains('dropdown')) {
                element.parentElement.parentElement.previousElementSibling.textContent = 'Сколько гостей';
                dropdown.querySelectorAll('.counter__value').forEach(element => {
                    element.value = 0;
                    element.previousElementSibling.style = 'opacity: 0.5;';
                    element.nextElementSibling.style = 'opacity: 1;';
                })
            } else if (event.target.parentElement.parentElement.parentElement.parentElement.classList.contains('dropdown-room')) {
                element.parentElement.parentElement.previousElementSibling.textContent = 'Удобства номера';
                dropdownRoom.querySelectorAll('.counter__value').forEach(element => {
                    element.value = 0;
                    element.previousElementSibling.style = 'opacity: 0.5;';
                    element.nextElementSibling.style = 'opacity: 1;';
                })
            }
        }
    })
});