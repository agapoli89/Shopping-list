export class ShoppingList {
    constructor() {
        const _shoppingList = [];
        /* const _inTheBasketList = []; */
        this.showShoppingList = () => _shoppingList;
      /*   this.showInTheBasketList = () => _inTheBasketList; */
    }

    showListsLength() {
        document.getElementById('js-number-to-buy').textContent = this.showShoppingList().length;
       /*  document.getElementById('js-number-in-basket').textContent = this.showInTheBasketList().length;
        console.log(this.showShoppingList()); */
        const inTheBasketList = [];
        this.showShoppingList().forEach(product => {
            if (product.classList.contains('crossed-out')) {
                inTheBasketList.push(product);
            }
        });
        document.getElementById('js-number-in-basket').textContent = inTheBasketList.length;
    }

    addDataIndex() {
        this.showShoppingList().forEach((product, index) => product.dataset.index = index);
    }
    
}