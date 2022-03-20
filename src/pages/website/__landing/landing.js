/* eslint-disable no-inner-declarations */
/* eslint-disable no-unused-vars */
import {
    dropdown
} from '../../../components/dropdown/dropdown';
import {
    dateDropdownBorder
} from '../../../components/date-dropdown/date-dropdown';
import * as datepicker from '../../../components/__cards/__room-search/room-search';

function landingSlider() {
    if (document.querySelector('.landing')) {
        let value = 1;
        let image = document.querySelectorAll('.landing__image');

        function showImage(e) {
            let i;

            if (e > image.length) {
                value = 1;
            }

            if (e < 1) {
                value = image.length;
            }

            for (i = 0; i < image.length; i++) {
                image[i].style.display = 'none';
            }

            image[value - 1].style.display = 'block';
        }

        setInterval(() => showImage(++value), 5000);
    }

}

landingSlider();
dropdown();
dateDropdownBorder();