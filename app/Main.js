import {Suggestions} from './Suggestions.js'
import {Product} from './Product.js'
import {LocalStorage} from './LocalStorage.js';
import {UI} from './UI.js';

class Main extends UI {
    constructor() {
        super();
        this.suggestions = new Suggestions();
        this.getLocalStorage = new LocalStorage();
    }

    init() {
        this.getLocalStorage.getProducts();
        this.getLocalStorage.getSuggestions();
        this.addProductsFromLS();
        this.getElement(this.uiSelectors.input).addEventListener('input', this.suggestions.searchProduct);
        this.getElement(this.uiSelectors.btn).addEventListener('click', (event) => {
            event.preventDefault();
            const product = new Product(this.getElement(this.uiSelectors.input).value);
            this.getElement(this.uiSelectors.input).value = "";
            product.createProduct();            
        });
    }

    addProductsFromLS() {
        const productsFromLS = this.getElements(this.uiSelectors.productsLS);
        productsFromLS.forEach(product => {
            const productFromLS = new Product(product.outerText);
            productFromLS.addPropertiesToTheProduct(product);
        });  
    }

}

const main = new Main();
main.init();
