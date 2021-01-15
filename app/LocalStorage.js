import { Product } from "./Product.js";
import { ShoppingList } from "./ShoppingList.js";

export class LocalStorage /* extends Product */ {
    /* constructor() {
        super();
    } */
    htmlElements = {
        listOfProducts: document.getElementById('js-list-panel--with-products'),
    }

    getProducts() {
       if (localStorage.getItem('productsToBuy') !== null) { 
            /* this.htmlElements.listOfProducts.innerHTML */ 
            const retrievedArr = JSON.parse(localStorage.getItem('productsToBuy'));
            console.log(retrievedArr);
            
                       
       } else {
           console.log('nothing in LS');
       }
    }

    setProducts(products) {
         
        /* localStorage.setItem('productsToBuy', products); */
        const productsJson = JSON.stringify(products);
        console.log(products);
/*         console.log(products[0].className);
        
        console.log(productsJson); */

       if (!products.length) {
            localStorage.removeItem('productsToBuy');
        }
        localStorage.setItem('productsToBuy', productsJson);
        
        
    }
}

