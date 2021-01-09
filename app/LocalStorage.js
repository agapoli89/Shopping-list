export class LocalStorage {
    htmlElements = {
        listOfProducts: document.getElementById('js-list-panel--with-products'),
    }
    getProducts() {
       if (localStorage.getItem('productsToBuy') !== null) {
            this.htmlElements.listOfProducts.innerHTML = localStorage.getItem('productsToBuy')
       } else {
           console.log('nothing in LS');  
       }
    }
}