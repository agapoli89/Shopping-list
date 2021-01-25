import {UI} from './UI.js';

export class LocalStorage  extends UI {

    getProducts() {
       if (localStorage.getItem('productsToBuy') !== null) {    
            const retrievedArr = localStorage.getItem('productsToBuy');
            
            this.getElement(this.uiSelectors.divWithProducts).innerHTML = retrievedArr;

            this.getElement(this.uiSelectors.divWithImage).classList.add('hidden');                    
       } else return
    }

    getSuggestions() {
        if (localStorage.getItem('suggestionsToBuy') !== null) {
            const retrievedArr = JSON.parse(localStorage.getItem('suggestionsToBuy'));
            return retrievedArr;
        } else return [];
    }

    setProducts(products) {
           localStorage.setItem('productsToBuy', this.getElement(this.uiSelectors.divWithProducts).innerHTML);

           if (products.length <= 0) localStorage.removeItem('productsToBuy')
        
    }

    setSuggestions(suggestions) {
        localStorage.setItem('suggestionsToBuy', JSON.stringify(suggestions));
    }
}

