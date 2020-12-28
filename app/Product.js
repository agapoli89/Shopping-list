import {ShoppingList} from './ShoppingList.js';

export class Product {
    htmlElements = {
        listImg: document.getElementById('js-list-panel--start'),
        addUl: document.getElementById('js-list-panel-ul'),
    }

    constructor (name, /* category="produkt", amount=1 */) {
    this.name = name;
/*     this.category = category;
    this.amount = amount; */
    }

    createProduct() {
        if (!this.name) {
            alert("Wpisz nazwę produktu :)");
            return;
        }
        this.htmlElements.listImg.classList.add('hidden');
        const product = document.createElement('li');
        product.classList.add('list-panel--with-products--li');
        product.innerHTML = this.name + '<div><i class="icon icon-basket"></i><i class="icon icon-trash-empty"></i></div>';
        this.htmlElements.addUl.appendChild(product);
        product.children[0].children[0].addEventListener('click', this.putProductInBasket);
        product.children[0].children[1].addEventListener('click', this.delateProduct);

        shoppingList.showShoppingList().push(product);
        shoppingList.addDataIndex();
        shoppingList.showListsLength();
    }

    putProductInBasket(e) {
        e.target.parentElement.parentElement.classList.toggle("crossed-out");

        if (e.target.parentElement.parentElement.classList.contains("crossed-out")) {
            shoppingList.showInTheBasketList().push(e.target);
        } else {
            console.log('takeFromBasket');
        }
        
        shoppingList.showListsLength();
    }

    delateProduct(e) {
        const index = e.target.parentElement.parentElement.dataset.index;
        e.target.parentElement.parentElement.remove();
        shoppingList.showInTheBasketList().splice(index,1);
    }
}

const shoppingList = new ShoppingList();