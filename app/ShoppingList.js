export class ShoppingList {
    htmlElements = {
        listImg: document.getElementById('js-list-panel--start'),
    }

    constructor() {
        const _shoppingList = [];
        /* const _inTheBasketList = []; */
        this.showShoppingList = () => _shoppingList;
      /*   this.showInTheBasketList = () => _inTheBasketList; */
    }

    showListsLength() {
        document.getElementById('js-number-to-buy').textContent = this.showShoppingList().length;
      
        const inTheBasketList = [];
        this.showShoppingList().forEach(product => {
            if (product.classList.contains('crossed-out')) {
                inTheBasketList.push(product);
            }
        });
        document.getElementById('js-number-in-basket').textContent = inTheBasketList.length;

        if (this.showShoppingList().length) {
            this.htmlElements.listImg.classList.add('hidden');
        } else {
            this.htmlElements.listImg.classList.remove('hidden'); 
        }
    }

    addDataIndex() {
        this.showShoppingList().forEach((product, index) => product.dataset.index = index);
    }
    
}