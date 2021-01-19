import {Suggestions} from './Suggestions.js'
import {Product} from './Product.js'
import { LocalStorage } from './LocalStorage.js';

export class Main {
    htmlElements = {
        addInput: document.getElementById('js-add-product-input'),
        addBtn: document.getElementById('js-add-product-btn'),   
        numberInBasket: document.getElementById('js-number-in-basket'),
    }
    constructor() {
        this.suggestions = new Suggestions();
        this.getLocalStorage = new LocalStorage();
    }


    init() {
        this.getLocalStorage.getProducts();
        this.getLocalStorage.getSuggestions();
        this.addProductsFromLS();
        this.htmlElements.addInput.addEventListener('input', (event) => this.suggestions.searchProduct(event));
        this.htmlElements.addBtn.addEventListener('click', (event) => {
            event.preventDefault();
            const product = new Product(this.htmlElements.addInput.value);
            this.htmlElements.addInput.value = "";
            product.createProduct();            
        });
    }

    addProductsFromLS() {
        const productsFromLS = document.querySelectorAll('.list-panel--with-products li');
        productsFromLS.forEach(product => {
            const productFromLS = new Product(product.outerText);
            productFromLS.addPropertiesToTheProduct(product);
        });  
    }

}

const main = new Main();
main.init();
