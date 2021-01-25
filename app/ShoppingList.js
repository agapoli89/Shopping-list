import {UI} from './UI.js';

export class ShoppingList extends UI{
    constructor() {
        super();
        const _shoppingList = [];
        this.showShoppingList = () => _shoppingList;
    }

    showListsLength() {
        this.getElement(this.uiSelectors.numberToBuy).textContent = this.showShoppingList().length;
      
        const inTheBasketList = [];
        this.showShoppingList().forEach(product => {
            if (product.classList.contains('crossed-out')) {
                inTheBasketList.push(product);
            }
        });
        this.getElement(this.uiSelectors.inBasket).textContent = inTheBasketList.length;

        if (this.showShoppingList().length) {
            this.getElement(this.uiSelectors.divWithImage).classList.add('hidden');
        } else {
            this.getElement(this.uiSelectors.divWithImage).classList.remove('hidden'); 
        }
    }

    addDataIndex() {
        this.showShoppingList().forEach((product, index) => product.dataset.index = index);
    }
    
}