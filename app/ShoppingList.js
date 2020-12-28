export class ShoppingList {
    constructor() {
        const _shoppingList = [1,2];
        const _inTheBasketList = [];
        this.showShoppingList = () => _shoppingList;
        this.showInTheBasketList = () => _inTheBasketList;
    }

    showListsLength() {
        document.getElementById('js-number-to-buy').textContent = this.showShoppingList().length;
    }
    
}