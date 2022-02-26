/* eslint-disable no-undef */
// import calendar from "./components/calendar/calendar";
// import dropdown from "./components/dropdown/dropdown";
// import radioButton from "./components/radio-buttons/radio-buttons";
// import expandableCheckbox from "./components/expandable-checkbox-list/expandable-checkbox-list";
import likeButton from "./components/like-button/like-button";
// import pagination from "./components/pagination/pagination";
// import rangeSlider from "./components/range-slider/range-slider";
// import dateDropdown from "./components/date-dropdown/date-dropdown";
// import slider from "./components/__cards/__slider/slider";
// import header from "./components/__headers&footers/__header/header";
// import landingSlider from "./pages/website/__landing/landing";
// import rate from "./components/rate-button/rate-button";

window.onload = function () {
    require("./components/__headers&footers/__header/header");
    if (document.getElementById("products__list")) {
        require("./components/__cards/__products/products");
        require("./components/pagination/pagination");
        require("./components/expandable-checkbox-list/expandable-checkbox-list");
        require("./components/calendar/calendar");
        require("./components/dropdown/dropdown");
        require("./components/radio-buttons/radio-buttons");
        require("./components/range-slider/range-slider");
        require("./components/rate-button/rate-button");
        require("./pages/website/__search-room/search-room");
    }

    if (document.querySelector(".landing")) {
        require("./components/dropdown/dropdown");
        require("./components/calendar/calendar");
        require("./pages/website/__landing/landing");
    }
};

import "./style/style.scss";