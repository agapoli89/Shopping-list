import {ShoppingList} from './ShoppingList.js';
import {LocalStorage} from './LocalStorage.js';

export class Product {
    htmlElements = {
        addUl: document.getElementById('js-list-panel-ul'),
    }

    constructor (name, /* category="produkt", amount=1 */) {
    this.name = name;
    this.localStorageObj = new LocalStorage();
/*     this.category = category;
    this.amount = amount; */
    }

    createProduct() {
        if (!this.name) {
            alert("Wpisz nazwę produktu :)");
            return;
        }
        const product = document.createElement('li');
        product.classList.add('list-panel--with-products--li');
        product.innerHTML = this.name + '<div><i class="icon icon-basket"></i><i class="icon icon-trash-empty"></i></div>';
        this.htmlElements.addUl.appendChild(product);
        product.children[0].children[0].addEventListener('click', this.putProductInBasket);
        product.children[0].children[1].addEventListener('click', this.delateProduct);

        shoppingList.showShoppingList().push(product);
        shoppingList.addDataIndex();
        shoppingList.showListsLength();
        console.log(shoppingList.showShoppingList()); 
        this.localStorageObj.setProducts(shoppingList.showShoppingList()); 
    }

    putProductInBasket(e) {
        e.target.parentElement.parentElement.classList.toggle("crossed-out");
        
        shoppingList.showListsLength();
        /* this.localStorageObj.setProducts();  */
    }

    delateProduct(e) {
        shoppingList.addDataIndex();
        const index = e.target.parentElement.parentElement.dataset.index;
        
        shoppingList.showShoppingList().splice(index, 1);
        e.target.parentElement.parentElement.remove();
        
        shoppingList.showListsLength();
        /* this.localStorageObj.setProducts(); */
    }
}

const shoppingList = new ShoppingList();

