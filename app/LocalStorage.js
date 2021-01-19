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
       } else return
    }

    getSuggestions() {
        if (localStorage.getItem('suggestionsToBuy') !== null) {
            const retrievedArr = JSON.parse(localStorage.getItem('suggestionsToBuy'));
            return retrievedArr;
        }
    }

    setProducts(products) {
           localStorage.setItem('productsToBuy', this.htmlElements.listOfProducts.innerHTML);

           if (products.length <= 0) localStorage.removeItem('productsToBuy')
        
    }

    setSuggestions(suggestions) {
        console.log(suggestions);
        localStorage.setItem('suggestionsToBuy', JSON.stringify(suggestions))
    }
}

