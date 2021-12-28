import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';

// AIR DATEPICKER
let selectItem = {
    content: 'Применить',
    className: 'custom-button-classname',
    onClick: (dp) =>{
        dp.hide()
    }
}

const dp = new AirDatepicker('.datepicker', {
    buttons: ['clear', selectItem],
    multipleDatesSeparator: ' - ',
    minDate: new Date(),
    multipleDates: 2,
    range: true,
    navTitles: {
        days: 'MMMM <i>yyyy</i>',
    },
    onSelect: function (fd, d, picker) {    
        document.querySelector('.date-form__inp--start').value = fd.formattedDate[0];
        document.querySelector('.date-form__inp--end').value = fd.formattedDate[1]; 
        document.querySelectorAll(".date-form__inp").forEach(element => {
            if (element.value == 'undefined') {
                element.value = '';
            }
        })
    },
})

const dpNoRange = new AirDatepicker('.datepicker-no-range', {
    buttons: ['clear', selectItem],
    multipleDatesSeparator: ' - ',
    minDate: new Date(),
    navTitles: {
        days: 'MMMM <i>yyyy</i>',
    },
})

