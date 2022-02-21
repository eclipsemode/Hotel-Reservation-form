import { productsData } from "../../../assets/data/products.data";
import { rateRating } from "../../rate-button/rate-button";

const products = [...productsData];

class Products {
    constructor(options) {
        this.data = options.data;
        this.classParentElement = options.classParentElement;
        this.classElement = options.classElement;
        this.classRoom = options.classRoom;
        this.classImg = options.classImg;
        this.classPrice = options.classPrice;
        this.classReviews = options.classReviews;
        this.classStar = options.classStar;
        this.classStarParent = options.classStarParent;
    }


    render() {
        let elem = document.querySelector(this.classParentElement);
        this.data.map(product => {
            return elem.innerHTML += `
            <div class=${this.classElement}>
                <ul class='products__list'>
                    <li class='products__item'>
                        <img class=${this.classImg} src=${product.src} alt='room'/>
                            <i class='material-icons material-icons--color-white products__nav--left'>chevron_left</i>
                            <i class='material-icons material-icons--color-white products__nav--right'>navigate_next</i>
                            <div class='products__nav--gradient-left'></div>
                            <div class='products__nav--gradient-right'></div>
                        <div class='products__content'>
                            <div class='products__about'>
                                <div class='products__room'>№
                                    <span class=${this.classRoom}>${product.room}</span>
                                    <span class='products__room--luxe'>${product.luxe}</span>
                                </div> 
                                <div class='products__price'>
                                    <div class=${this.classPrice}>${product.price}</div>
                                    <div class='products__price-text'>в сутки</div>
                                </div>
                            </div>
                            <div class='products__line'></div>
                            <div class='products__review'>
                                <div data-star=${product.star} class=${this.classStarParent}>
                                    <span class="${this.classStar}">star_border</span>
                                    <span class="${this.classStar}">star_border</span>
                                    <span class="${this.classStar}">star_border</span>
                                    <span class="${this.classStar}">star_border</span>
                                    <span class="${this.classStar}">star_border</span>
                                </div>
                                <div class='products__rate'>
                                    <div class=${this.classReviews}>${product.reviews}</div>
                                    <div class='products__rate-text'>Отзывов</div>
                                </div>
                            </div>
                        </div> 
                    </li> 
                </ul>
            </div>
            `;
        });
    }
}

const productsRender = new Products({
    data: products,
    classParentElement: "#products__list",
    classElement: "products",
    classRoom: "products__room-number",
    classImg: "products__img",
    classPrice: "products__price-value",
    classReviews: "products__rate-value",
    classStar: "material-icons material-icons--color-primary products__rate-button",
    classStarParent: "products__rate",
});

productsRender.render();

rateRating();