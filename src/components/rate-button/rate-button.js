function rateRating() {
  if (document.querySelector(".products__rate")) {
    const rate = document.querySelectorAll(".products__rate");
    for (let i = 0; i < rate.length; i++) {
      let rateValue = Number(rate[i].attributes[0].value);
      for (let b = 0; b < rateValue; b++) {
        rate[i].children[b].textContent = "star";
      }
    }
  }
}

export { rateRating };
