import { dropdownRenderFunc } from "../../../components/dropdown/dropdown";
import { dropdownRoomRenderFunc } from "../../../components/dropdown-room/dropdown-room";
import { radioButton } from "../../../components/radio-buttons/radio-buttons";
import { like } from "../../../components/like-button/like-button";
import { slider } from "../../../components/range-slider/range-slider";
import { pagination } from "../../../components/pagination/pagination";
import { checkboxPress } from "../../../components/expandable-checkbox-list/expandable-checkbox-list";

dropdownRenderFunc();
dropdownRoomRenderFunc();
radioButton();
like();
slider();
pagination(15, 1);
checkboxPress();
