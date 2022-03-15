/* eslint-disable no-undef */
import {
    burger
} from './components/__headers&footers/__header/header';


window.onload = function () {

    if (document.getElementById('products__list')) {
        require('./pages/website/__search-room/search-room');
    }

    if (document.querySelector('.landing')) {
        require('./pages/website/__landing/landing');
    }

    if (document.querySelector('.room')) {
        require('./pages/website/__room-details/room-details');
    }
};

import './style/style.scss';

burger();