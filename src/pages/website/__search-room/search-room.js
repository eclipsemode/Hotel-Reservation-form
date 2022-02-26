window.addEventListener("scroll", event => {

    basicPosition = document.querySelector(".search__nav-icon").style.position;
    basicTop = document.querySelector(".search__nav-icon").style.top;

    if (window.scrollY < 159 && window.innerWidth <= "610px") {
    document.querySelector(".search__nav").style.top = "11rem";
    } 
    
    console.log(window.scrollY);
});

