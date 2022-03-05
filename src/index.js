/* eslint-disable no-undef */
// import likeButton from "./components/like-button/like-button";
import { burger } from "./components/__headers&footers/__header/header";


window.onload = function () {

    if (document.getElementById("products__list")) {
        require("./pages/website/__search-room/search-room");
    }

    if (document.querySelector(".landing")) {
        require("./pages/website/__landing/landing");
    }
};

import "./style/style.scss";

burger();