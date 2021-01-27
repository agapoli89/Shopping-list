import {ShoppingList} from './ShoppingList.js';
import {LocalStorage} from './LocalStorage.js';
import {Suggestions} from './Suggestions.js';
import {UI} from './UI.js';

export class Product extends UI {

    constructor (name, /* category="produkt", amount=1 */) {
        super();
        this.name = name;
/*     this.category = category;
       this.amount = amount; */
    }

    createProduct() {
        if (!this.name) {
            alert("Wpisz nazwę produktu :)");
            return;
        }
        if (!/[a-z]/.test(this.name)) {
            alert(`"${this.name}" to nie jest nazwa produktu. Proszę wpisz poprawną nazwę.`);
            return;
        }
        
        for (let i=0; i<shoppingList.showShoppingList().length; i++) {
            if (shoppingList.showShoppingList()[i].innerText.toLowerCase().includes(this.name.toLowerCase())) {
                if (confirm(`${this.name} jest już na Twojej liście. Czy mimo wszystko chcesz dodać ten produkt?`)) {
                } else {
                    return;
                }
            }
        }
        
        const product = document.createElement('li');
        product.classList.add('list-panel--with-products--li');
        product.innerHTML = this.name + '<div><i class="icon icon-basket"></i><i class="icon icon-trash-empty"></i></div>';
        this.getElement(this.uiSelectors.ulAdd).appendChild(product);
        this.addPropertiesToTheProduct(product);
    }

    addPropertiesToTheProduct(product) {
        product.children[0].children[0].addEventListener('click', this.putProductInBasket);
        product.children[0].children[1].addEventListener('click', this.delateProduct);

        shoppingList.showShoppingList().push(product);
        shoppingList.addDataIndex();
        shoppingList.showListsLength(); 
        localStorageObj.setProducts(shoppingList.showShoppingList()); 
        
        if (!suggestions.showSuggestions().includes(this.name.toLowerCase())) {
            suggestions.showSuggestions().push(this.name.toLowerCase());
            localStorageObj.setSuggestions(suggestions.showSuggestions());
            localStorageObj.getSuggestions();
            this.getElement(this.uiSelectors.input).addEventListener('input', suggestions.searchProduct);
        }
    }

    putProductInBasket(e) {
        e.target.parentElement.parentElement.classList.toggle("crossed-out");
        
        shoppingList.showListsLength();
        localStorageObj.setProducts(shoppingList.showShoppingList());
    }

    delateProduct(e) {
        shoppingList.addDataIndex();
        const index = e.target.parentElement.parentElement.dataset.index;
        
        shoppingList.showShoppingList().splice(index, 1);
        e.target.parentElement.parentElement.remove();
        
        shoppingList.showListsLength();
        localStorageObj.setProducts(shoppingList.showShoppingList());
    }
}

const shoppingList = new ShoppingList();
const localStorageObj = new LocalStorage();
const suggestions = new Suggestions();

