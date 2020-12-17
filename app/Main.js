import {Suggestions} from './Suggestions.js'

export class Main {
    htmlElements = {
        addInput: document.getElementById('js-add-product-input'),
        addBtn: document.getElementById('js-add-product-btn'),
        addUl: document.getElementById('js-add-product-ul'),
        addInfo: document.getElementById('js-add-product-ul'),
        listImg: document.getElementById('js-list-panel--start'),
        listProducts: document.getElementById('js-list-panel--with-products'),
        numberToBuy: document.getElementById('js-number-to-buy'),
        numberInBasket: document.getElementById('js-number-in-basket'),
    }
    constructor() {
        this.suggestions = new Suggestions();
    }


    init() {
        this.htmlElements.addInput.addEventListener('input', (event) => this.suggestions.searchProduct(event));
        console.log(this.addInputValue);
        
    }

    
}

const main = new Main();
main.init();
