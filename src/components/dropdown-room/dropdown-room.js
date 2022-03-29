import { Dropdown } from "./Dropdown";

const dropdownRoomRender = new Dropdown({
  mainActiveClass: "dropdown-room--active",
  mainTypeClass: ".dropdown-room__type",
  mainClass: ".dropdown-room",
  inputsClass: ".dropdown-room__value",
  buttons: document.querySelectorAll(".dropdown-room__btn"),
  inputs: document.querySelectorAll(".dropdown-room__value"),
  buttonsSubmit: document.querySelectorAll(".dropdown-room__submit-item"),
  main: document.querySelector(".dropdown-room"),
  mainType: document.querySelector(".dropdown-room__type"),
  bedroom: document.querySelector("[name='bedrooms']"),
  bed: document.querySelector("[name='beds']"),
  bathroom: document.querySelector("[name='bathrooms']"),
  textNormal: document.querySelector(".dropdown-room__type").firstChild
    .textContent,
});

const dropdownRoomRenderFunc = () => {
  dropdownRoomRender.itemCounter();
  dropdownRoomRender.dropdownOpen();
  dropdownRoomRender.out();
  dropdownRoomRender.submit();
};

export { dropdownRoomRenderFunc };
