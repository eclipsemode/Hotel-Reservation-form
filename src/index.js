import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';
import "./style/style.scss";
import ArrowSvg from './style/assets/images/arrow_forward.svg';



// // AIR DATEPICKER
// let selectItem = {
//     content: 'Применить',
//     className: 'custom-button-classname',
//     onClick: (dp) => {
//         let date = new onSelect();
//         dp.selectDate(date);
//         dp.setViewDate(date);
//     },
// }
// new AirDatepicker('#el', {
//     buttons: ['clear', selectItem],
//     multipleDatesSeparator: ' - ',
//     classes: 'dp-style',
//     minDate: new Date(),
// })
// new AirDatepicker('#el2', {
//     buttons: ['clear', selectItem],
//     multipleDatesSeparator: ' - ',
//     classes: 'dp-style',
//     minDate: new Date(),
// })
// new AirDatepicker('#el3', {
//     buttons: ['clear', selectItem],
//     multipleDatesSeparator: ' - ',
//     classes: 'dp-style',
//     minDate: new Date(),
// })
// new AirDatepicker('#el-filter', {
//     buttons: ['clear', selectItem],
//     multipleDatesSeparator: ' - ',
//     classes: 'dp-style',
//     minDate: new Date(),
//     multipleDates: 2,
//     range: true,
// })

// CLICK ON BUTTON DROPDOWN. OPEN / CLOSE THE SELECT / ITEM SELECTION FROM LIST. MEMORISE SELECTED ITEM. CLOSE DROPDOWN
document.addEventListener('click', (event) => {
    if (event.target.closest('.dropdown-type')) {
        document.querySelector('.dropdown').classList.toggle('active');
    } else if (!event.target.closest('.dropdown')) {
        document.querySelector('.dropdown').classList.remove('active');
    } else if (event.target.closest('.dropdown-menu__list-item')) {
        document.querySelectorAll('.dropdown-menu__list-item').forEach(function (listItem) {
            listItem.addEventListener('click', function () {
                document.querySelector('.dropdown-type').innerText = this.innerText;
                document.querySelector('.dropdown-type').focus();
                document.querySelector('.dropdown').classList.remove('active');
            })
        });
    }
});

// ITEM COUNTER
const buttons = document.querySelectorAll(".counter__btn");
buttons.forEach(btn => {
    btn.addEventListener("click", function () {
        const direction = this.dataset.direction;

        const inp = this.parentElement.querySelector(".counter__value");

        const currentValue = +inp.value;

        let newValue;

        if (direction === "plus") {
            newValue = currentValue + 1;
        } else {
            newValue = currentValue - 1 > 0 ? currentValue - 1 : 0;
        }

        inp.value = newValue;
    })
})


const date = new Date();

date.setDate(1);

const monthDays = document.querySelector('.calendar_days');

const lastDay = new Date(date.getFullYear(),
    date.getMonth() + 1, 0).getDate();

const prevLastDay = new Date(date.getFullYear(),
    date.getMonth(), 0).getDate();

const firstDayIndex = date.getDate() - 1;

const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1, 0).getDay();

const nextDays = 7 - lastDayIndex;

const months = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь"
];

document.querySelector('.calendar_month__date h2').innerHTML = months[date.getMonth()];

document.querySelector('.calendar_month__date span').innerHTML = date.getFullYear();

let days = "";

for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="calendar_days__prev-date "><p>${prevLastDay - x + 1}</p></div>`;
}

for (let i = 1; i <= lastDay; i++) {
    if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
        days += `<div class="calendar_days__today"><p>${i}</p></div>`;
    } else {
        days += `<div><p>${i}</p></div>`;
    }
}

for (let j = 1; j <= nextDays; j++) {
    days += `<div class="calendar_days__next-date"><p>${j}</p></div>`;
    monthDays.innerHTML = days;
}

document.querySelector(".calendar_month__left").addEventListener('click', () => {

})