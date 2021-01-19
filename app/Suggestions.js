import { LocalStorage } from "./LocalStorage.js";

export class Suggestions {
    htmlElements = {
        searchUl: document.getElementById('js-add-product-ul'),
        btn: document.getElementById('js-add-product-btn'),
    }
    constructor() {
        const _listOfSuggestions = localStorageObj.getSuggestions();
        this.showSuggestions = () => _listOfSuggestions;
    }
    searchProduct(event) {
        const searchedWord = event.target.value.toLowerCase();
        const allSuggestions = this.showSuggestions();
        
        const matchingSugg = allSuggestions.filter(suggestion => suggestion.includes(searchedWord));
        console.log(matchingSugg);
        

        if (matchingSugg.length <= 0) return;

        matchingSugg.forEach(suggestion => {
            const suggLi = document.createElement('li');
            suggLi.classList.add('add-product-panel__input');
            suggLi.classList.add('add-product-panel__input--li');
            suggLi.textContent = suggestion;
            this.htmlElements.searchUl.appendChild(suggLi);
            suggLi.addEventListener('click', this.chooseProduct);
        });

        console.log(window.innerWidth);
        
        if (window.innerWidth < 700) {
            this.htmlElements.btn.classList.add('hidden')
        }
    }

    chooseProduct(e) {
        document.getElementById('js-add-product-input').value = e.target.textContent;
        document.getElementById('js-add-product-ul').innerHTML = "";
        document.getElementById('js-add-product-btn').classList.remove('hidden');
    }

}

const localStorageObj = new LocalStorage();