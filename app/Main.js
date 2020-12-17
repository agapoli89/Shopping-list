import {Suggestions} from './Suggestions.js'
import {Product} from './Product.js'

export class Main {
    htmlElements = {
        addInput: document.getElementById('js-add-product-input'),
        addBtn: document.getElementById('js-add-product-btn'),   
        listProducts: document.getElementById('js-list-panel--with-products'),
        numberToBuy: document.getElementById('js-number-to-buy'),
        numberInBasket: document.getElementById('js-number-in-basket'),
    }
    constructor() {
        this.suggestions = new Suggestions();
    }


    init() {
        this.htmlElements.addInput.addEventListener('input', (event) => this.suggestions.searchProduct(event));
        this.htmlElements.addBtn.addEventListener('click', (event) => {
            event.preventDefault();
            const product = new Product(this.htmlElements.addInput.value);
            product.createProduct();            
        });
    }

}

const main = new Main();
main.init();
