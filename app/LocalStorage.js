import { ShoppingList } from "./ShoppingList.js";

export class LocalStorage {
    htmlElements = {
        listOfProducts: document.getElementById('js-list-panel--with-products'),
    }

    getProducts() {
       if (localStorage.getItem('productsToBuy') !== null) {
            this.htmlElements.listOfProducts.innerHTML = localStorage.getItem('productsToBuy');
            shoppingList.showListsLength();
       } else {
           console.log('nothing in LS');
       }
    }

    setProducts() {
        localStorage.setItem('productsToBuy', this.htmlElements.listOfProducts.innerHTML);

       /*  if (!shoppingList.showShoppingList().length) {
            localStorage.removeItem('productsToBuy');
        } */
    }
}

const shoppingList = new ShoppingList();