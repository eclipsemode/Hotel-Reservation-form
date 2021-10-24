import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';
export default function () {


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
    })
}