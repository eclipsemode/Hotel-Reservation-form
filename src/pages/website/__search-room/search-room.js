/* eslint-disable no-unused-vars */
import {
    dpOne
} from '../../../components/calendar/calendar';
import {
    dropdown
} from '../../../components/dropdown/dropdown';
import * as products from '../../../components/__cards/__products/products';
import {
    pagination
} from '../../../components/pagination/pagination';
import {
    checkboxPress
} from '../../../components/expandable-checkbox-list/expandable-checkbox-list';
import {
    radioButton
} from '../../../components/radio-buttons/radio-buttons';
import {
    slider
} from '../../../components/range-slider/range-slider';

dropdown();
pagination(15, 1);
checkboxPress();
radioButton();
slider();