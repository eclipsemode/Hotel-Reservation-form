import { Dropdown } from "../dropdown-room/Dropdown";

const dropdownRender = new Dropdown({
  mainActiveClass: "dropdown--active",
  mainTypeClass: ".dropdown__type",
  mainClass: ".dropdown",
  inputsClass: ".dropdown__value",
  buttons: document.querySelectorAll(".dropdown__btn"),
  inputs: document.querySelectorAll(".dropdown__value"),
  buttonsSubmit: document.querySelectorAll(".dropdown__submit-item"),
  main: document.querySelector(".dropdown"),
  mainType: document.querySelector(".dropdown__type"),
  bedroom: document.querySelector("[name='adults']"),
  bed: document.querySelector("[name='children']"),
  bathroom: document.querySelector("[name='babies']"),
  textNormal: document.querySelector(".dropdown__type").firstChild.textContent,
});

const dropdownRenderFunc = () => {
  dropdownRender.itemCounter();
  dropdownRender.dropdownOpen();
  dropdownRender.out();
  dropdownRender.inp();
  dropdownRender.submit();
};

export { dropdownRenderFunc };
