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
        console.log(allSuggestions);
        
        const matchingSugg = allSuggestions.filter(suggestion => suggestion.includes(searchedWord));
        console.log(matchingSugg);

        document.querySelectorAll('.add-product-panel__input--li').forEach((li) => {
            if(!li.innerText.includes(searchedWord)) {
                li.remove(); 
            }
        });

        if (searchedWord === "") {
            document.querySelectorAll('.add-product-panel__input--li').forEach(li => li.remove());
            document.getElementById('js-add-product-btn').classList.remove('hidden');
            return;
        };

        matchingSugg.forEach((suggestion) => {
                const liToCheck = Array.from(document.querySelectorAll('.add-product-panel__input--li')).map(li => {
                    return li.innerText;
                });
                
                if (liToCheck.includes(suggestion)) return;
                
                const suggLi = document.createElement('li');
                suggLi.classList.add('add-product-panel__input');
                suggLi.classList.add('add-product-panel__input--li');
                suggLi.textContent = suggestion;
                this.htmlElements.searchUl.appendChild(suggLi);
                suggLi.addEventListener('click', this.chooseProduct);

                if (window.innerWidth < 700) {
                    this.htmlElements.btn.classList.add('hidden');
                }          
        });

        if (matchingSugg.length <= 0) {
            this.htmlElements.btn.classList.remove('hidden');
        } 
    }

    chooseProduct(e) {
        document.getElementById('js-add-product-input').value = e.target.textContent;
        document.getElementById('js-add-product-ul').innerHTML = "";
        document.getElementById('js-add-product-btn').classList.remove('hidden');
    }

}

const localStorageObj = new LocalStorage();