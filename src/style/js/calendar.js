const date = new Date();

const renderCalendar = () => {
    date.setDate(7);

    const monthDays = document.querySelector('.calendar_days');

    const lastDay = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
    ).getDate();

    const prevLastDay = new Date(
        date.getFullYear(),
        date.getMonth(),
        0
    ).getDate();

    const firstDayIndex = date.getDay();

    const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();

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
        days += `<div class="calendar_days__prev-date ">${prevLastDay - x + 1}</div>`;
    }

    for (let i = 1; i <= lastDay; i++) {
        if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
            days += `<div class="calendar_days__today">${i}</div>`;
        } else {
            days += `<div>${i}</div>`;
        }
    }

    for (let j = 1; j <= nextDays; j++) {
        days += `<div class="calendar_days__next-date">${j}</div>`;
        monthDays.innerHTML = days;
    }


    monthDays.addEventListener('click', (e) => {
        e.currentTarget.childNodes.forEach((x) => {
            x.classList.remove("selected--day")
        })
        e.target.classList.add("selected--day")
    });

    document.querySelector('.calendar_buttons__clear').addEventListener('click', () => {
        monthDays.childNodes.forEach((i) => {
            i.classList.remove('selected--day');
        })
    })

};

document.querySelector(".calendar_month__left").addEventListener('click', () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
});

document.querySelector(".calendar_month__right").addEventListener('click', () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
});


renderCalendar();