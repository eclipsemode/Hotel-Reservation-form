/* eslint-disable no-unused-vars */
import AirDatepicker from "air-datepicker";
import "air-datepicker/air-datepicker.css";

// AIR DATEPICKER
let selectItem = {
    content: "Применить",
    className: "custom-button-classname",
    onClick: (dp) =>{
        dp.hide();
    }
};

const dp = new AirDatepicker(".datepicker", {
    buttons: ["clear", selectItem],
    multipleDatesSeparator: " - ",
    minDate: new Date(),
    multipleDates: 2,
    range: true,
    navTitles: {
        days: "MMMM <i>yyyy</i>",
    },
    onSelect: function (fd) {    
        document.querySelector(".date-form__inp--start").value = fd.formattedDate[0];
        document.querySelector(".date-form__inp--end").value = fd.formattedDate[1]; 
        
        document.querySelectorAll(".date-form__inp").forEach(element => {
            if (element.value == "undefined") {
                element.value = "";
            }
        });
        localStorage.setItem("date_1", fd.date[0]);
        localStorage.setItem("date_2", fd.date[1]);
    },
});


const dpOne = new AirDatepicker(".datepicker-one", {
    multipleDates: 2,
    selectedDates: [localStorage.getItem("date_1"), localStorage.getItem("date_2")],
    buttons: ["clear", selectItem],
    multipleDatesSeparator: " - ",
    minDate: new Date(),
    range: true,
    navTitles: {
        days: "MMMM <i>yyyy</i>",
    },
    dateFormat: "d MMM",
    onSelect: function (fd) {
        localStorage.setItem("date_1", fd.date[0]);
        localStorage.setItem("date_2", fd.date[1]);
    }
    
});


const dpNoRange = new AirDatepicker(".datepicker-no-range", {
    buttons: ["clear", selectItem],
    multipleDatesSeparator: " - ",
    navTitles: {
        days: "MMMM <i>yyyy</i>",
    },
});