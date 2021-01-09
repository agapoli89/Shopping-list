import {Suggestions} from './Suggestions.js'
import {Product} from './Product.js'
import {LocalStorage} from './LocalStorage.js'

export class Main {
    htmlElements = {
        addInput: document.getElementById('js-add-product-input'),
        addBtn: document.getElementById('js-add-product-btn'),   
        numberInBasket: document.getElementById('js-number-in-basket'),
    }
    constructor() {
        this.suggestions = new Suggestions();
        this.localStorageObj = new LocalStorage();
    }


    init() {
        this.localStorageObj.getProducts();
        this.htmlElements.addInput.addEventListener('input', (event) => this.suggestions.searchProduct(event));
        this.htmlElements.addBtn.addEventListener('click', (event) => {
            event.preventDefault();
            const product = new Product(this.htmlElements.addInput.value);
            this.htmlElements.addInput.value = "";
            product.createProduct();            
        });
    }

}

const main = new Main();
main.init();
