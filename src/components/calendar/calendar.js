import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';

// AIR DATEPICKER
let selectItem = {
    content: 'Применить',
    className: 'custom-button-classname',
    onClick: (dp) => {
        let date = new onSelect();
        dp.selectDate(date);
        dp.setViewDate(date);
    },
}

new AirDatepicker('#el', {
    buttons: ['clear', selectItem],
    multipleDatesSeparator: ' - ',
    minDate: new Date(),
    multipleDates: 2,
    range: true,
    navTitles: {
        days: 'MMMM <i>yyyy</i>',
    },
})