/* eslint-disable no-unused-vars */
import {
    dropdown
} from '../../../components/dropdown/dropdown';
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
import * as filterDate from '../../../components/filter-date-dropdown/filter-date-dropdown';
import * as products from '../../../components/__cards/__products/products';

dropdown();
pagination(15, 1);
checkboxPress();
radioButton();
slider();