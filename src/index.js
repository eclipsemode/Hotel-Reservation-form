import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';
import "./style/style.scss";
import ArrowSvg from './style/assets/images/arrow_forward.svg';

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
    classes: 'dp-style',
    minDate: new Date(),
})
new AirDatepicker('#el2', {
    buttons: ['clear', selectItem],
    multipleDatesSeparator: ' - ',
    classes: 'dp-style',
    minDate: new Date(),
})
new AirDatepicker('#el3', {
    buttons: ['clear', selectItem],
    multipleDatesSeparator: ' - ',
    classes: 'dp-style',
    minDate: new Date(),
})
new AirDatepicker('#el-filter', {
    buttons: ['clear', selectItem],
    multipleDatesSeparator: ' - ',
    classes: 'dp-style',
    minDate: new Date(),
    multipleDates: 2,
    range: true,
})



// CLICK ON BUTTON DROPDOWN. OPEN / CLOSE THE SELECT
document.querySelector('.dropdown-type').addEventListener('click', () => {
    document.querySelector('.dropdown').classList.toggle('hidden');
    document.querySelector('.dropdown-type').classList.add('dropdown-type--active');
});

// ITEM SELECTION FROM LIST. MEMORISE SELECTED ITEM. CLOSE DROPDOWN
document.querySelectorAll('.dropdown-menu__list-item').forEach(function (listItem) {
    listItem.addEventListener('click', function () {
        document.querySelector('.dropdown-type').innerText = this.innerText;
        document.querySelector('.dropdown-type').focus();
        document.querySelector('.dropdown').classList.remove('hidden');
    })
});