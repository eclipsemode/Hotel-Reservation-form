/* eslint-disable no-unused-vars */
import AirDatepicker from "air-datepicker";
import "air-datepicker/air-datepicker.css";

// AIR DATEPICKER
let selectItem = {
  content: "Применить",
  className: "custom-button-classname",
  onClick: (dp) => {
    dp.hide();
  },
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
    document.querySelector(".date-form__inp--start").value =
      fd.formattedDate[0];
    document.querySelector(".date-form__inp--end").value = fd.formattedDate[1];

    document.querySelectorAll(".date-form__inp").forEach((element) => {
      if (element.value === "undefined") {
        element.value = "";
      }
    });
  },
  onRenderCell({ date, cellType, datepicker }) {
    if (document.querySelector(".card-search__btn")) {
      document
        .querySelector(".card-search__btn")
        .addEventListener("click", () => {
          if (dp.rangeDateFrom === "") {
            localStorage.setItem("date_1", new Date());
          } else {
            localStorage.setItem("date_1", dp.rangeDateFrom);
          }

          if (dp.rangeDateTo === "") {
            localStorage.setItem(
              "date_2",
              new Date(Date.now() + 1 * 24 * 60 * 60 * 1000)
            );
          } else {
            localStorage.setItem("date_2", dp.rangeDateTo);
          }
        });
    }

    if (window.innerWidth <= 480) {
      datepicker.opts.position = "bottom center";
    } else {
      datepicker.opts.position = "bottom left";
    }
  },
});

const dpOne = new AirDatepicker(".datepicker-one", {
  multipleDates: 2,
  selectedDates: [
    localStorage.getItem("date_1"),
    localStorage.getItem("date_2"),
  ],
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
  },
  onRenderCell({ date, cellType, datepicker }) {
    if (window.innerWidth <= 610) {
      datepicker.opts.position = "bottom center";
    } else {
      datepicker.opts.position = "bottom left";
    }
  },
});

const dpOneDate = new AirDatepicker(".datepicker-one-el", {
  buttons: ["clear", selectItem],
  navTitles: {
    days: "MMMM <i>yyyy</i>",
  },
  dateFormat: "dd.MM.yy",
  onRenderCell({ date, cellType, datepicker }) {
    if (window.innerWidth <= 610) {
      datepicker.opts.position = "bottom center";
    } else {
      datepicker.opts.position = "bottom left";
    }
  },
});

const dpForm = new AirDatepicker(".datepicker-form", {
  buttons: ["clear", selectItem],
  navTitles: {
    days: "MMMM <i>yyyy</i>",
  },
  inline: true,
  multipleDates: 2,
  range: true,
});

export { dp, dpOne, dpOneDate, dpForm };
