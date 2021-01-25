import { LocalStorage } from "./LocalStorage.js";
import {UI} from './UI.js';

export class Suggestions extends UI {
    constructor() {
        super();
        this.localStorageObj = new LocalStorage();
        const _listOfSuggestions = this.localStorageObj.getSuggestions();
        this.showSuggestions = () => _listOfSuggestions;
    }
    searchProduct = (event) => {
        const searchedWord = event.target.value.toLowerCase();
        
        const allSuggestions = this.showSuggestions();
        
        const matchingSugg = allSuggestions.filter(suggestion => suggestion.includes(searchedWord));

        this.getElements(this.uiSelectors.liSuggestions).forEach((li) => {
            if(!li.innerText.includes(searchedWord)) {
                li.remove(); 
            }
        });

        if (searchedWord === "") {
            this.getElements(this.uiSelectors.liSuggestions).forEach(li => li.remove());
            this.getElement(this.uiSelectors.btn).classList.remove('hidden');
            return;
        };

        matchingSugg.forEach((suggestion) => {
                const liToCheck = Array.from(this.getElements(this.uiSelectors.liSuggestions)).map(li => {
                    return li.innerText;
                });
                
                if (liToCheck.includes(suggestion)) return;
                
                const suggLi = document.createElement('li');
                suggLi.classList.add('add-product-panel__input');
                suggLi.classList.add('add-product-panel__input--li');
                suggLi.textContent = suggestion;
                this.getElement(this.uiSelectors.ulSearch).appendChild(suggLi);
                suggLi.addEventListener('click', this.chooseProduct);

                if (window.innerWidth < 700) {
                    this.getElement(this.uiSelectors.btn).classList.add('hidden');
                }          
        });

        if (matchingSugg.length <= 0) {
            this.getElement(this.uiSelectors.btn).classList.remove('hidden');
        } 
    }

    chooseProduct = (e) => {
        this.getElement(this.uiSelectors.input).value = e.target.textContent;
        this.getElement(this.uiSelectors.ulSearch).innerHTML = "";
        this.getElement(this.uiSelectors.btn).classList.remove('hidden');
    }

}