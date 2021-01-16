import { Product } from "./Product.js";
import { ShoppingList } from "./ShoppingList.js";

export class LocalStorage  {
  
    htmlElements = {
        listOfProducts: document.getElementById('js-list-panel--with-products'),
        listImg: document.getElementById('js-list-panel--start'),
    }

    getProducts() {
       if (localStorage.getItem('productsToBuy') !== null) {    
            const retrievedArr = localStorage.getItem('productsToBuy');
            
            this.htmlElements.listOfProducts.innerHTML = retrievedArr;

            this.htmlElements.listImg.classList.add('hidden');
            
                       
       } else {
           console.log('nothing in LS');
       }
    }

    setProducts(products) {
           localStorage.setItem('productsToBuy', this.htmlElements.listOfProducts.innerHTML);

           if (products.length <= 0) localStorage.removeItem('productsToBuy')
        
    }
}

